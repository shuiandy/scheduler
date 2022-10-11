import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    if (replace) {
      setMode((prev) => newMode);
      let replaceHistory = [...history];
      replaceHistory[replaceHistory.length - 1] = mode;
      setHistory((prev) => replaceHistory);
    } else {
      setMode((prev) => newMode);
      let newHistory = [...history];
      newHistory.push(newMode);
      setHistory((prev) => newHistory);
    }
  }

  const back = () => {
    let historyStack = [...history];
    historyStack.pop();
    setHistory((prev) => historyStack);
    while (history) {
      setMode((prev) => historyStack[historyStack.length - 1]);
    }
  };

  return { mode, transition, back };
}
