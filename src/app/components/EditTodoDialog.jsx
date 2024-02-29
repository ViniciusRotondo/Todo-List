import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';
import { useState } from 'react';


export default function EditTodoDialog({ open, dialogHandler, todo, editTodo }) {
  const [editedText, setEditetText] = useState(todo.text)

  const textHandler = () => {
    editTodo(todo.id, editedText);
    dialogHandler();
  }
  return (
      <Dialog
        open={open}
        keepMounted
        onClose={dialogHandler}
        aria-describedby="alert-dialog-slide-description"
        fullWidth
      >
        <DialogTitle>{"Editando Tarefa"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <TextField defaultValue={editedText} onChange={(e) => setEditetText(e.target.value)} fullWidth />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={ dialogHandler }>Cancelar</Button>
          <Button onClick={textHandler}>Ok</Button>
        </DialogActions>
      </Dialog>
  );
}