import React, { useEffect, useState, useRef } from 'react';
import { Button, TextField, makeStyles } from '@material-ui/core';
import { useParams } from 'react-router';
import { collectionsConnect } from '../../connects/collections/index'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 500,
    justifyContent: 'space-around',
  },
});

export function ChatFormRender(props) {

  const { chatId } = useParams();

  const emptyMessage = {
    id: "",
    chatId: "",
    author: "",
    text: ""
  };

  const [message, setMessage] = useState(emptyMessage);

  const handleChangeText = (event) => {
    setMessage({ ...message, text: event.target.value });
  }

  const onAddMessage = () => {
    props.addCollection({ ...message, chatId: chatId, id: Date.now().toString() });
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
      <Button variant="contained" color="primary" onClick={onAddMessage} disableElevation>
        Отправить
      </Button>
    </form>
  )
}

export const ChatForm = collectionsConnect(ChatFormRender);