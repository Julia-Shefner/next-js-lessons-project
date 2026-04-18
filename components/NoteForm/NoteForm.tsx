"use client";

import { Category, createNote, NewNoteData } from "@/lib/api";
import { useRouter } from "next/navigation";
import css from "./NoteForm.module.css";
import { useMutation } from "@tanstack/react-query";
import { useNoteDraftStore } from "@/lib/stores/noteStore";

type NoteFormProps = {
  categories: Category[];
};

const NoteForm = ({ categories }: NoteFormProps) => {
  const router = useRouter();
  const { draft, setDraft, clearDraft } = useNoteDraftStore();

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setDraft({
      ...draft,
      [event.target.name]: event.target.value,
    });
  };

  const { mutate } = useMutation({
    mutationFn: createNote,
    onSuccess: () => {
      clearDraft();
      router.push("/notes/filter/all");
    },
  });

  const handleCancel = () => router.push("/notes/filter/all");

  const handleSubmit = (formData: FormData) => {
    const values = Object.fromEntries(formData) as NewNoteData;
    console.log(values);
    mutate(values);
  };

  return (
    <form action={handleSubmit} className={css.form}>
      <label className={css.label}>
        Title
        <input
          className={css.input}
          type="text"
          name="title"
          defaultValue={draft?.title}
          onChange={handleChange}
        />
      </label>
      <label className={css.label}>
        Content
        <textarea
          className={css.textarea}
          name="content"
          defaultValue={draft?.content}
          onChange={handleChange}
        ></textarea>
      </label>
      <label className={css.label}>
        Category
        <select
          className={css.select}
          name="categoryId"
          defaultValue={draft?.categoryId}
          onChange={handleChange}
        >
          {categories.map((category) => (
            <option value={category.id} key={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </label>
      <div>
        <button type="submit" className={css.submitBtn}>
          Create
        </button>
        <button type="button" onClick={handleCancel} className={css.cancelBtn}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default NoteForm;
