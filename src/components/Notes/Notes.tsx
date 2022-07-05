import { useAppSelector } from "../../hooks";
import Note from "../Note/Note";
import "./Notes.scss";

function Notes() {
  const notes = useAppSelector((state ) => state.notes)

  return (
    <div className="note-container">
      {notes.list.map((item, index) => {
        return <Note key={index} title={item.title} message={item.message} index={index} />;
      })}
    </div>
  );
}

export default Notes;
