import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';


const Form=(props)=>{
    const [formData, setFormData] = useState({
           title:" " ,
           content:" "

    });

    const formSubmitHandler = (event)=>{
        props.addNote(formData);
        setFormData({
            title:" " ,
           content:" "
        });
        event.preventDefault();
        
    };
    const formInputChangeHandler=(event)=>{
        const newValue = event.target.value;
        const inputName= event.target.name;
        if(inputName==="title"){
            setFormData({...formData, title:newValue});
        }
        else if(inputName==="content"){
            setFormData({...formData, content:newValue});
        }
    };
   return(
      <React.Fragment>
        <form className="create-note">
                <span>Title</span>
				<input
					onChange={formInputChangeHandler}
					name="title"
					value={formData.title}
					
				/>
                <span>Take a Note</span>
				<textarea
					onChange={formInputChangeHandler}
					name="content"
					value={formData.content}
					rows="3"
					
				/>
                  {/* <button onClick={formSubmitHandler }><AddIcon/></button> */}
				<Fab onClick={formSubmitHandler}>
					<AddIcon />
				</Fab>
			 </form>
      </React.Fragment>
   );
};

export default Form;