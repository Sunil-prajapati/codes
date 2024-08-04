// useMemo does not return the function only return value
// useCallBack returning entire function
// when you have to create a function only one time
// it does not re-run the code unless dependencies change
// when we wrap the function with useCallback the we can call that function in child component
// useCallback also take argument
import { useCallback, useState } from "react";
const [number, setNumber] = useState(0);
const getItems = useCallback(() => {
  return [number, number + 1, number + 2];
}, [number]);
