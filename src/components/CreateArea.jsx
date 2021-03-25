import React from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

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
      <form className="create-note">
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
        <Zoom in={true}>
          <Fab onClick={clickHandle}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
