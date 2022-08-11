import React, { useState } from "react";
import styles from "./Chatbot.module.css";

const Chatbot = () => {

  const arrowDown = 'rr-angle-down';
  const chat = 'rs-comments';

  const [close, setClose] = useState('400');
  // console.log(close);
  const [botSign, setBotSign] = useState(arrowDown)

  const handleClose = () => {
    // console.log('close');
    setClose('0')

    switch (botSign) {
      case arrowDown:
        setBotSign(chat);
        break;
      case chat:
        setBotSign(arrowDown);
        break;
      default:
        return null;
    }
    
    if (close === '0') {
      setClose('400')
    }
  }

  return (
    <div className={styles.chatbot_container}>
      <iframe
        width={close}
        height={close}
        allow="microphone;"
        src="https://console.dialogflow.com/api-client/demo/embedded/3dde80ff-9e14-4c66-bba6-8d65b453e12d"
        title="chatBot"
      ></iframe>
      <div className={styles.close} onClick={() => handleClose()}>
        <i className={`fi fi-${botSign}`}></i>
      </div>
    </div>
  );
};

export default Chatbot;
