import { useState } from "react";

export function Button() {
  const [counter, setCounter] = useState(0);

  let imcrement = () => {
    // counter += 1;
    setCounter(counter + 1)
    console.log(counter);
  };

  return <button onClick={imcrement}>{counter}</button>;
}
