import { useState } from "react";

function App() {
  return (
    <>
      <ul id="messages"></ul>
      <form
        id="form"
        className="fixed right-0 bottom-0 left-0 box-border flex h-12 bg-orange-100 p-1"
        action=""
      >
        <input
          id="input"
          className="m-1 grow rounded-4xl border-none bg-amber-400 px-8 py-0 outline-none"
          autoComplete="off"
        />
        <button className="m-1 rounded border-none bg-yellow-400 px-4 py-0 text-gray-900 outline-none">
          Send
        </button>
      </form>
    </>
  );
}

export default App;
