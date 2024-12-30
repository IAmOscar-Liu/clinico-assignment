import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { ROOT_CODE, ROOT_LEFT_CODE } from "../constants";

const CodeContext = createContext<null | {
  code1: string;
  code2: string;
  setCode1: Dispatch<SetStateAction<string>>;
  setCode2: Dispatch<SetStateAction<string>>;
}>(null);

export function useCodeContext() {
  const data = useContext(CodeContext);
  if (!data) {
    throw new Error("useCodeContext must be used within a CodeProvider");
  }
  return data;
}

function CodeProvider({ children }: { children: ReactNode }) {
  const [code1, setCode1] = useState(ROOT_CODE);
  const [code2, setCode2] = useState(ROOT_LEFT_CODE);

  return (
    <CodeContext.Provider value={{ code1, setCode1, code2, setCode2 }}>
      {children}
    </CodeContext.Provider>
  );
}

export default CodeProvider;
