import { useState } from 'react';
import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import {IconButton} from '@mui/material';
import Create from '@mui/icons-material/Create'


export default function TodoForm({addTodo}){
    
    const [text,setText]=useState('')
    const change=(event)=>{setText(event.target.value)}
    const handelSubmit=(e)=>{
        e.preventDefault()
        if(text!=''){
            addTodo(text)
            setText('')
        }

    }
    return(
        <>
     <form onSubmit={handelSubmit}>
     <div className='form'>
     <TextField sx={{width:'70%'}}id="standard-basic" label="Task" variant="standard" 
       slotProps={{
        input: {
            endAdornment: <InputAdornment position="end">
                <IconButton type='submit'>
                  <Create/>
                </IconButton>
            </InputAdornment>,
        },
      }}
     value={text} onChange={change}/>
     

     </div>
     </form>
     
        </>
    )
}