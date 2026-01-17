import { useEffect, useState } from "react";

function CountUp({ value, duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = Number(value.toString().replace(/\D/g, "")); // remove +, %, etc.
    if (start === end) return;

    const incrementTime = Math.floor(duration / end);
    const counter = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(counter);
    }, incrementTime);

    return () => clearInterval(counter);
  }, [value, duration]);

  // keep symbols like +, %
  const suffix = value.toString().replace(/[0-9]/g, "");

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

export default CountUp;
