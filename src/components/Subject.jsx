import ClearIcon from '@mui/icons-material/Clear';
import { TextField } from "@mui/material";
import Fab from '@mui/material/Fab';
import Tooltip from '@mui/material/Tooltip';
import React, { useEffect, useState } from "react";

const Subject = ({id, handleState, handleDelete}) => {
  const [ subjects, setSubjects ] = useState({
    id: {id},
    units: "",
    finalGrade: ""
  });

  const handleChange = async(e)=> {
    const { name, value } = e.target;
    //regex for numbers and floating numbers
    const isNumber = /^[0-9]*\.?[0-9]*$/.test(value);
    if(isNumber) {
      setSubjects((prevValue)=> {
        return {...prevValue, [name]: value}
      });
      handleState(e, id);
    }
  }
  
  return (
    <div className="subject">
      <TextField 
        name="units" 
        onChange={handleChange} 
        value={subjects.units} 
        type="text" 
        size="small" 
        id="outlined-basic" 
        label="Units" 
        variant="outlined" 
      />
      <TextField 
        name="finalGrade" 
        onChange={handleChange} 
        value={subjects.finalGrade} 
        type="text" 
        size="small" 
        id="outlined-basic" 
        label="Final Grade" 
        variant="outlined" 
      />
      <Tooltip title="Delete Subject">
        <ClearIcon className="delete" style={{cursor: "pointer"}} onClick={()=> handleDelete(id)}/>
      </Tooltip>
    </div>
  )
}

export default Subject
