import { createContext, useState } from "react";

export const DoneContext = createContext(null);

export default function TaskProvider(props) {
  const [done, setDone] = useState([]);

  return (
    <DoneContext.Provider value={[done, setDone]}>
      {props.children}
    </DoneContext.Provider>
  );
}
