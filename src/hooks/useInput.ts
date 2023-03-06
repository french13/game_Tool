import { useState, useCallback, ChangeEvent } from "react"


type UserInput = [string, (e: React.ChangeEvent<HTMLInputElement>) => void];

const useInput = (initialValue: string): UserInput => {
  const [value, setValue] = useState(initialValue);

  const handleRegister = useCallback( (e : React.ChangeEvent<HTMLInputElement> ) => {
    setValue(e.target.value);
  }, []);

  return [value, handleRegister];
};

export default useInput;