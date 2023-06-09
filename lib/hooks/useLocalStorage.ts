import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  // const [state, setState] = useState<T>(() => {
  //   const json = localStorage.getItem(key);
  //   return json ? JSON.parse(json) : initialValue;
  // });
  const [state, setState] = useState<T>(initialValue);

  // when component mounts, get data of the given key, if data is not there already state is initialValue
  useEffect(() => {
    try {
      const json = localStorage.getItem(key);
      const data = json ? JSON.parse(json) : initialValue;
      setState(data);
    } catch (err) {
      console.warn(err, "error while reading from local storage");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // a wrapper over setState, but it also save given value to localStorage
  function setStorage(value: T | ((v: T) => T)) {
    const data = value instanceof Function ? value(state) : value;
    const json = JSON.stringify(data);
    localStorage.setItem(key, json);
    setState(data);
  }

  return [state, setStorage] as const;
}
