import { useEffect, useState, use } from "react";

import { AuthContext } from "../../contexts/authContext.jsx";
import { getSocket, disconnectSocket } from "../../socket.js";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [connectStatus, setConnectStatus] = useState(false);
  const auth = use(AuthContext);

  const socket = getSocket();

  useEffect(() => {
    setConnectStatus(socket.connected);

    const socketMessages = (msg) => {
      console.log(msg);
      setMessages((prevMsg) => [
        ...prevMsg,
        { content: msg.content, user: msg.username },
      ]);
      socket.auth.lastMessageTime = msg.date;
      console.log(socket.auth.lastMessageTime);
    };

    const handleConnect = () => setConnectStatus(true);
    const handleDisconnect = () => setConnectStatus(false);

    socket.on("chat message", socketMessages);
    socket.on("connect", handleConnect);
    socket.on("disconnect", handleDisconnect);

    return () => {
      console.log("disconnecting listeners");
      socket.off("chat message", socketMessages);
      socket.off("connection", handleConnect);
      socket.off("disconnection", handleDisconnect);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      const content = {
        msg: input.trim(),
        id: auth.id,
        username: auth.user,
      };
      socket.emit("chat message", content);
      setInput("");
    }
  };

  const disconnect = () => {
    console.log("before", socket);
    if (socket.connected) {
      socket.disconnect();
    } else {
      socket.connect();
    }
    console.log("after", socket);
  };

  return (
    <div className="flex w-full flex-1 flex-col justify-between">
      <ul id="messages">
        {messages.map((msg, index) => (
          <li key={index} className="text-white">
            {msg.user}
            {msg.content}
          </li>
        ))}
      </ul>
      <form
        id="form"
        className="mx-auto box-border flex h-12 w-full bg-orange-100 p-1"
        action=""
        onSubmit={handleSubmit}
      >
        <input
          id="input"
          className="m-1 grow rounded-4xl border-none bg-amber-400 px-8 py-0 outline-none"
          autoComplete="off"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="m-1 rounded border-none bg-yellow-400 px-4 py-0 text-gray-900 outline-none">
          Send
        </button>
        <button className="hover:cursor-pointer" onClick={disconnect}>
          {connectStatus ? "Disconnect" : "Connect"}
        </button>
      </form>
    </div>
  );
};

export default Chat;
