import { useEffect, useState, use } from "react";

import { AuthContext } from "../../contexts/authContext.jsx";
import { socket } from "../../socket.js";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const auth = use(AuthContext);

  useEffect(() => {
    const socketMessages = (msg) => {
      setMessages((prevMsg) => [...prevMsg, msg.msg]);
    };

    socket.on("chat message", socketMessages);

    return () => {
      socket.off("chat message", socketMessages);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(messages);
    if (input) {
      const content = {
        msg: input.trim(),
        id: auth.id,
      };
      socket.emit("chat message", content);
      setInput("");
    }
  };

  return (
    <div className="flex w-full flex-1 flex-col justify-between">
      <ul id="messages">
        {messages.map((msg, index) => (
          <li key={index} className="text-white">
            {msg}
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
      </form>
    </div>
  );
};

export default Chat;
