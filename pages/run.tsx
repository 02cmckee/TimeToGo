import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import runnerAnimation from "../assets/runner.json";
import { motion } from "framer-motion";
import CountdownTimer from "../components/CountdownTimer";
import natty from "../assets/natty.png";
import seaweed from "../assets/seaweed.jpeg";
import Layout from "../components/Layout";
import moment from "moment";
import Twemoji from "../components/Twemoji";

const countdown = () => {
  const [position, setPosition] = useState<any>(0);
  const [endTime, setEndTime] = useState<any>(0);
  const [startTime, setStartTime] = useState<any>(0);
  const [totalTime, setTotalTime] = useState<any>(0);
  const [eventData, setEventData] = useState<any>([]);
  //get time since 9:00 am this morning

  useEffect(() => {
    // set time once page renders on client from localStorage
    const storedEndTime = localStorage.getItem("endTime");
    const storedStartTime = localStorage.getItem("startTime");
    const storedEventData = JSON.parse(localStorage.getItem("eventData")!);
    const parsedEventData = JSON.parse(storedEventData);
    if (!storedEndTime || !storedStartTime || !parsedEventData) {
      console.log(
        "ERROR, not all items present in local storage (TODO show error screen"
      );
    }

    // set local states from storage
    setEventData(parsedEventData);
    setEndTime(parseInt(storedEndTime!));
    setStartTime(parseInt(storedStartTime));
    setTotalTime(parseInt(storedEndTime!) - moment().valueOf());

    //every second, update position
    const interval = setInterval(() => {
      const width = window.innerWidth;
      //compute difference between now and end time in seconds
      const secondsToFinish = moment(moment(parseInt(storedEndTime!))).diff(
        moment(),
        "seconds"
      );
      const secondsTotal = moment(moment(parseInt(storedEndTime!))).diff(
        moment(parseInt(storedStartTime!)),
        "seconds"
      );
      // compute difference between start time and now in seconds
      const percentDone = 1 - secondsToFinish / secondsTotal;
      const position = ((width - 100) * percentDone + 50).toFixed(0);
      setPosition(parseInt(position));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <div className="relative flex h-screen w-screen flex-row items-center overflow-hidden">
        {/* Event item */}
        <div className="absolute h-2 w-full bg-[#FF6F13]" />
        <div className="absolute top-10 left-1/2 -translate-x-1/2 transform">
          <h1 className="mb-2 text-center text-4xl font-semibold tracking-tight text-orange-500">
            Time<span className="text-orange-300">2</span>Go
          </h1>
          <CountdownTimer targetDate={endTime} />
        </div>
        {eventData.map((event: any, index: number) => {
          return (
            <EventCell
              emoji={event.emoji}
              title={event.title}
              time={event.time}
              startTime={startTime}
              endTime={endTime}
              key={index}
            />
          );
        })}
        <div
          className="absolute z-50 mb-24 h-24 w-24 -translate-x-12 transition-all"
          style={{ left: position }}
        >
          <Lottie
            animationData={runnerAnimation}
            loop={true}
            className="scale-150 object-cover"
          />
        </div>
      </div>
    </Layout>
  );
};

const EventCell = ({ emoji, title, time, startTime, endTime }: any) => {
  const [leftOffset, setLeftOffset] = useState(0);

  useEffect(() => {
    //calculate the position of the event
    const width = window.innerWidth;
    const secondsToFinish = moment(moment(endTime)).diff(
      moment(time),
      "seconds"
    );
    const secondsTotal = moment(moment(endTime)).diff(
      moment(startTime),
      "seconds"
    );
    // compute difference between start time and now in seconds
    const percentDone = 1 - secondsToFinish / secondsTotal;
    const position = ((width - 100) * percentDone + 50).toFixed(0);
    // setLeftOffset(parseInt(position));
    console.log(moment(startTime).format("MMMM Do YYYY, h:mm:ss a"));
    console.log(moment(endTime).format("MMMM Do YYYY, h:mm:ss a"));
    console.log(moment(time).format("MMMM Do YYYY, h:mm:ss a"));

    setLeftOffset(parseInt(position));
  }, []);

  return (
    <div
      style={{ left: leftOffset }}
      className={`absolute top-1/2 -translate-y-1/2 transform items-center justify-center rounded-full border bg-white p-3 text-6xl shadow-lg transition-all`}
    >
      <div className="h-8 w-8">
        <Twemoji emoji={emoji} />
      </div>
    </div>
  );
};

export default countdown;
