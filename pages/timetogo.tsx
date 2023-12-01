import React, { useEffect, useState } from "react";
import { LinkIcon, PlusIcon } from "@heroicons/react/outline";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import {
  LocalizationProvider,
  StaticTimePicker,
  TimePicker,
} from "@mui/x-date-pickers";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import useLocalStorage from "../hooks/useLocalStorage";
import moment from "moment";
import EmojiPicker from "../components/EmojiPicker";
import EmojiDropdown from "../components/Transition/EmojiDropdown";
import Twemoji from "../components/Twemoji";
import EventInput from "../components/EventInput";

const theme = createTheme({
  typography: {
    fontFamily: "Albert Sans, sans-serif",
  },
  palette: {
    primary: {
      main: "#3AA7FA",
      contrastText: "#fff",
    },
    secondary: {
      main: "#FFC107",
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          display: "none",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          borderTopRightRadius: 6,
          borderBottomRightRadius: 6,
          height: "100%",
          ":focus": {
            outline: "none",
          },
          ":hover": {
            borderColor: "red",
          },
        },
      },
    },
  },
});

function countdownpage() {
  const [endTime, setEndTime] = useLocalStorage("endTime", 0);
  const [startTime, setStartTime] = useLocalStorage("startTime", 0);
  const [eventData, setEventData] = useLocalStorage("eventData", 0);
  const [events, setEvents] = useState([
    {
      title: "Happy Hour",
      emoji: "🍺",
      time: moment().add(20, "minutes"),
    },
  ]);
  const [started, setStarted] = useState(false);
  const [time, setTime] = useState<any>(moment().add(2, "hours"));
  const router = useRouter();

  const setRunParameters = () => {
    // store times and event data in local storage
    setEndTime(time.valueOf());
    setStartTime(moment().valueOf());
    setEventData(JSON.stringify(events));
  };

  const onEventEmojiSelect = (emoji: string, index: number) => {
    const newEvents = [...events];
    newEvents[index].emoji = emoji;
    setEvents(newEvents);
  };

  const onEventTitleChange = (title: string, index: number) => {
    const newEvents = [...events];
    newEvents[index].title = title;
    setEvents(newEvents);
  };

  const onEventTimeChange = (time: any, index: number) => {
    const newEvents = [...events];
    newEvents[index].time = time;
    setEvents(newEvents);
  };

  const deleteEvent = (index: number) => {
    const newEvents = [...events];
    newEvents.splice(index, 1);
    setEvents(newEvents);
  };

  const addEmptyEvent = () => {
    setEvents([
      ...events,
      { title: "", emoji: "👋", time: moment().add(20, "minutes") },
    ]);
  };

  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <div className="relative flex h-screen w-screen flex-col items-center">
            <div
              className={`duration-600 flex h-1/2 w-screen justify-center bg-gradient-to-br from-orange-600 to-orange-400 pt-4 transition`}
            >
              <h1 className="text-4xl font-semibold tracking-tight text-white">
                Time2Go
              </h1>
            </div>
            <div className="duration-600 flex h-1/2 w-screen justify-center bg-gradient-to-br from-slate-100 to-slate-200 pt-4 transition" />
            <div className="no-scrollbar absolute top-1/2 left-1/2 z-10 h-auto max-h-[85vh] w-full max-w-md -translate-x-1/2 -translate-y-1/2 transform space-y-2 overflow-y-auto rounded-md bg-white px-8 pt-8 shadow-lg">
              <h2 className="font-bold text-gray-700">Select End Time</h2>
              <StaticTimePicker
                ampm
                toolbarTitle=""
                orientation="portrait"
                openTo="minutes"
                value={time}
                onChange={(newTime) => {
                  setTime(newTime);
                  console.log(newTime?.valueOf());
                }}
                renderInput={(params) => (
                  <TextField {...params} variant="filled" />
                )}
              />
              <h2 className="font-bold text-gray-700">Events</h2>
              {events.map((event, index) => {
                return (
                  <EventInput
                    index={index}
                    setEmoji={onEventEmojiSelect}
                    emoji={event.emoji}
                    setTitle={onEventTitleChange}
                    title={event.title}
                    setTime={onEventTimeChange}
                    time={event.time}
                    deleteEvent={deleteEvent}
                    endTime={time}
                    key={index}
                  />
                );
              })}

              <div
                onClick={addEmptyEvent}
                className="group flex h-10 w-full cursor-pointer flex-row items-center justify-center rounded-md bg-gray-100 text-gray-400 transition hover:bg-gray-200 hover:text-gray-500"
              >
                <PlusIcon className="mr-2 h-4 w-4" />
                <span className="font-medium">Add Event</span>
              </div>
              <h2 className="font-bold text-gray-700">Share Link</h2>
              <div className="group flex h-10 w-full cursor-pointer flex-row items-center justify-center rounded-md bg-gray-100 text-gray-400 transition hover:bg-gray-200 hover:text-gray-500">
                <LinkIcon className="mr-2 h-4 w-4" />
                <span className="font-medium">Copy Link</span>
              </div>
              <div className="sticky bottom-0 bg-white pt-3 pb-8">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setRunParameters();
                    router.push("run");
                  }}
                  className="btn w-full bg-orange-400 text-white hover:bg-orange-500"
                >
                  Start Run
                </button>
              </div>
            </div>
          </div>
        </LocalizationProvider>
      </ThemeProvider>
    </Layout>
  );
}

export default countdownpage;
