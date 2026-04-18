import { getCategories } from "@/lib/api";
import NoteForm from "@/components/NoteForm/NoteForm";

const CreateNote = async () => {
  const categories = await getCategories();

  return (
    <div>
      <NoteForm categories={categories} />
    </div>
  );
};

export default CreateNote;
