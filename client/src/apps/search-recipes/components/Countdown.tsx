import { memo, useEffect, useState } from "react";

const Countdown = memo(({ number }: { number: number }) => {
  const [counter, setCounter] = useState(number);
  console.log("Re-render countdown");

  useEffect(() => {
    const intervalID = window.setInterval(() => {
      setCounter((prev) => {
        if (prev === 0) {
          console.log("Clearing");
          clearInterval(intervalID);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(intervalID);
      console.log("Clearing");
    };
  }, []);

  return <h1>Countdown: {counter}</h1>;
});

export default Countdown;
