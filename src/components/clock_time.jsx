import { useEffect, useState } from "react";

let Clock_time = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    console.log("interval started");
    const Intervalid = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(Intervalid);
      console.log("nterval cleared");
    };
  }, []);
  return (
    <center>
      <p className="lead">
        This is the current time: {time.toLocaleDateString()}-{""}
        {time.toLocaleTimeString()}
      </p>
    </center>
  );
};
export default Clock_time;
