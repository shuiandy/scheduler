import react, {useState} from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]); // This line is new!


  function transition() { /* ... */ }
  function back() { /* ... */ }

  return { mode, transition, back };
};