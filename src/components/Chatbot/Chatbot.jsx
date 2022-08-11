import React from "react";
import styles from "./Chatbot.module.css";

const Chatbot = () => {
  return (
    
    <div className={styles.chatbot_container}>
      <iframe
        width="350"
        height="450"
        allow="microphone;"
        src="https://console.dialogflow.com/api-client/demo/embedded/3dde80ff-9e14-4c66-bba6-8d65b453e12d"
        title="chatBot"
      ></iframe>
    </div>
  );
};

export default Chatbot;
