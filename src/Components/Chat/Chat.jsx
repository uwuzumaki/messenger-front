import { useEffect, useState } from "react";
import { socket } from "../../socket";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const socketMessages = (msg) => {
      setMessages((prevMsg) => [...prevMsg, msg]);
    };

    socket.on("chat message", socketMessages);

    return () => {
      socket.off("chat message", socketMessages);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      console.log(input);
      socket.emit("chat message", input);
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
