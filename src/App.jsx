import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CssBaseline from '@mui/material/CssBaseline';
import TodoList from './TodoList';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ContrastIcon from '@mui/icons-material/Contrast';
import { Box } from '@mui/material';






const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
    },
  },
});
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#ffffff', 
    },
  },
});


function App() {

  const [theme,setTheme]=useState(JSON.parse(localStorage.getItem('theme')))
  const toggel=()=>{setTheme(!theme)}
   useEffect(()=>{
        localStorage.setItem("theme",JSON.stringify(theme))
      },[theme]);
 
  return (
    <>
   
  
    <ThemeProvider  theme={theme? lightTheme :darkTheme}>
        <CssBaseline/>
     
        <Box sx={{  overflowY: 'auto',minHeight: '100vh', width: '98vw' ,flexGrow: 1}}>
        <button id="theme" onClick={toggel}>
          <ContrastIcon />
        </button>
        <TodoList />
        </Box>
        
      
    </ThemeProvider>
    
    
   
     
    </>
  )
}

export default App






