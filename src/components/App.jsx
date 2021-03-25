import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = React.useState([]);

  function updateNotes(note) {
    setNotes((prevValue) => [...prevValue, note]);
  }

  function deleteNote(id) {
    setNotes(notes.filter((item, index) => index !== id));
  }

  return (
    <div>
      <Header />
      <CreateArea updateNotes={updateNotes} />

      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          deleteNote={deleteNote}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
