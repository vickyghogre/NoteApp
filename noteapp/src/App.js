import React, { useState }  from "react";


import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import Form from "./components/Form";


function App() {
  const [notes,setNotes] = useState([]);
  
  const addNote=(note)=>{
        setNotes([...notes,note]);
  };

  const deleteNote=(uniqueId)=>{
   const newArray =  notes.filter((ele,idx)=>{
     return idx!==uniqueId;
   });
   setNotes(newArray);
  };

  return (
    <div className="App">
        <Header/>
        <Form addNote={addNote}/>
        {notes.map((ele,idx)=>{
           return <Note title={ele.title} content={ele.content} uniqueId={idx} deleteNote={deleteNote} />;
        })}
        <Footer/>
    </div>
  );
};

export default App;
