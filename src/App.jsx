import { useEffect, useState } from "react";
import { socket } from "./socket";

function App() {
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
    <>
      <ul id="messages">
        {messages.map((msg, index) => (
          <li key={index} className="text-white">
            {msg}
          </li>
        ))}
      </ul>
      <form
        id="form"
        className="fixed right-0 bottom-0 left-0 box-border flex h-12 bg-orange-100 p-1"
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
    </>
  );
}

export default App;
