import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import Tooltip from '@mui/material/Tooltip';
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./Header.jsx";
import Subject from "./Subject.jsx";

const App = ()=> {
  const [ subjects, setSubjects ] = useState([
    {
      id: uuidv4(),
      units: "",
      finalGrade: ""
    },
    {
      id: uuidv4(),
      units: "",
      finalGrade: ""
    },
    {
      id: uuidv4(),
      units: "",
      finalGrade: ""
    },
  ]);
  const [ grades, setGrades ] = useState(0);
  const [ units, setUnits ] = useState(0);
  const [ gwa, setGwa ] = useState(0);
  
  const initalValue = {
    id: uuidv4(),
    units: "",
    finalGrade: ""
  }
  const addSubjectRow = ()=> {
    setSubjects((prevValue)=> {
      return [...prevValue, initalValue]
    });
  }

  const handleState = (e, id)=> {
    const { name, value } = e.target;
    setSubjects((prevValue)=> {
      return prevValue.map((subject)=> {
        if (subject.id === id) {
          return {...subject, [name]: value}
        }
        return subject;
      })
    })
  }
  
  const handleDelete = (index) => {
    setSubjects((prevValue)=> {
      return prevValue.filter((subject)=> {
        return subject.id !== index;
      })
    })
  }

  useEffect(() => {
    const validSubjects = subjects.filter(({ units, finalGrade }) => units && finalGrade);
    const grades = validSubjects.reduce((acc, { units, finalGrade }) => {
        return acc + (parseInt(units) * parseFloat(finalGrade));
    }, 0);
    setGrades(grades);

    const units = validSubjects.reduce((acc, { units }) => {
        return acc + parseInt(units)
    }, 0);
    setUnits(units);

    if((grades > 0 && units > 0)){
      setGwa((grades / units).toFixed(4));
    } else{
      setGwa("0.0000");
    }
  }, [subjects, subjects.length]);
  
  return (
    <>
      <Header />
      <main className="container">
        <div className="header">
          <h2>{gwa === 0 ? "GWA:" + gwa : "GWA: " + gwa}</h2>
        </div>
        <div>
        {
          subjects.map((subject)=> {
            return <Subject key={subject.id} id={subject.id} handleState={handleState} handleDelete={handleDelete}/>
          })
        }
        </div>
      </main> 
      <div className="sticky-add-btn">
        <Tooltip title="Add Subject">  
          <Fab onClick={addSubjectRow} size="medium" color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Tooltip>
      </div>
    </>
  )
}

export default App
