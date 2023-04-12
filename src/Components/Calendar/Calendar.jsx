import React, { useEffect, useState } from "react";
import "./Calendar.css";
import Moment from "react-moment";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="date_contain">
      <Moment format="dddd" date={currentDate} className="day"></Moment>
      <Moment format="h:mm" date={currentDate} className="time"></Moment>
      <Moment format="MMMM Do" date={currentDate} className="date"></Moment>
    </div>
  );
}
