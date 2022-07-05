import "./NewNote.scss";
import React, { useState } from "react";
import { newNote } from "../../reducers/notes";
import { useAppDispatch } from "../../hooks";

function NewNote() {
  const [note, setNote] = useState("");
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState("");

  const onClick = () => {
    dispatch(
      newNote({
        title: title,
        message: note,
      })
    );
  };

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const target = event.target.value;
    setNote(target);
  }

  function onChangeTitle(event: React.ChangeEvent<HTMLInputElement>) {
    const target = event.target.value;
    setTitle(target);
  }

  return (
    <div className="newNotes">
      <h2>Add A New Note:</h2>
      <div className="note">
        <h3>Note:</h3>
        <input type="text" onChange={onChangeTitle} placeholder="Title" />
        <input
          id="noteElement"
          onChange={onChange}
          type="box"
          placeholder="Write your note here..."
        />
      </div>
      <div className="button">
        <button onClick={onClick}>Add Note</button>
      </div>
    </div>
  );
}

export default NewNote;
