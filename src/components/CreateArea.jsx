import React from "react";

function CreateArea(props) {
  const [note, setNote] = React.useState({
    title: "",
    content: "",
  });

  function changeHandle(event) {
    const { name, value } = event.target;
    setNote((prevValue) => ({ ...prevValue, [name]: value }));
  }

  function clickHandle(event) {
    props.updateNotes(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={changeHandle}
          name="title"
          placeholder="Title"
          autoComplete="off"
          value={note.title}
        />
        <textarea
          onChange={changeHandle}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button onClick={clickHandle}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
