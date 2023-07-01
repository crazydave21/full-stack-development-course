import React, { useState, useEffect } from "react";

function useCounter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = () => {
      setCount(count + 1);
    };

    setTimeout(timer, 1000);
  });
  return <div>{count}</div>;
}

export default useCounter;
