import React, { useEffect, useState, useRef } from 'react';
import { Button, TextField, makeStyles } from '@material-ui/core';
import { useParams } from 'react-router';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 500,
    justifyContent: 'space-between',
  },
});

export function ChatForm(props) {
  
  const { chatId } = useParams();

  const emptyMessage = {
    id: "",
    chatId: "",
    author: "",
    text: ""
  };

  const [message, setMessage] = useState(emptyMessage);

  const handleChangeAuthor = (event) => {
    setMessage({ ...message, author: event.target.value });
  }

  const handleChangeText = (event) => {
    setMessage({ ...message, text: event.target.value });
  }

  const sendMessage = () => {
    props.onSubmit({ ...message, chatId: chatId, id: Date.now().toString() } );
    setMessage(emptyMessage);
    setFocus();
  }

  const inputRef = useRef(null);

  useEffect(() => {
    setFocus()
  }, []);

  const setFocus = () => {
    inputRef.current?.focus();
  };

  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="filled-basic" label="Сообщение" variant="filled" value={message.text} onChange={handleChangeText} inputRef={inputRef} />
      <TextField id="standard-basic" label="Имя" value={message.author} onChange={handleChangeAuthor} />
      <Button variant="contained" color="primary" onClick={sendMessage} disableElevation>
        Отправить
      </Button>
    </form>
  )
}

