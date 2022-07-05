import { useAppDispatch } from "../../hooks";
import { deleteNote } from "../../reducers/notes";
import "./Note.scss";

interface Props {
  title: string;
  message: string;
  index: number;
}

function Note(props: Props) {
  const { title, message, index } = props;
  const dispatch = useAppDispatch();

  const onDelete = () => {
    dispatch(deleteNote(index));
  };

  return (
    <div className="add-note">
      <h4>
        {title} {index}
      </h4>
      <p>{message}</p>
      <button>View Detail</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default Note;
