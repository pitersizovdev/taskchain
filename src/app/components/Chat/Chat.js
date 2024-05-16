import React, { useContext } from "react";
import ChatBox from "../ChatBox/ChatBox";
import Input from '../Input/Input';
import styles from "./chat.module.scss";
import { ChatContext } from "../../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className={styles.chat}>
      <div className={styles.chatInfo}>{data.user?.displayName}</div>
      <ChatBox />
      <Input/>
    </div>
  );
};

export default Chat;