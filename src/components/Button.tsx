import { useState } from "react";

export function Button() {
 const [counter] = useState(0);


  const imcrement = () => {
   // counter += 1;
    console.log(counter)
  };

  return <button onClick={imcrement} >{counter}</button>;
}
