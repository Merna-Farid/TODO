import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';



export default function TodoItem({todo,remove,toggel}){
    const labelId = `checkbox-list-label-${todo.id}`;


    return (
      <ListItem
        
        secondaryAction={
          <IconButton edge="end" aria-label="comments" onClick={()=>remove(todo.id)}>
            <DeleteOutlineIcon  />
          </IconButton>
        }
        disablePadding
      >
        <ListItemButton role={undefined}  dense>
          <ListItemIcon>
            <Checkbox
            onClick={()=>toggel(todo.id)}
              edge="start"
              checked={todo.completed}
              tabIndex={-1}
              disableRipple
              inputProps={{ 'aria-labelledby': labelId }}
            />
          </ListItemIcon>
          <ListItemText id={labelId} primary={todo.text} />
        </ListItemButton>
      </ListItem>
    );
}