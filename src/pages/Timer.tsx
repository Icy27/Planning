import { LocalizationProvider, TimeField } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState, useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";
import "./Timer.css";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import CircularProgress from "@mui/material/CircularProgress";

export default function Timer() {
  const [value, setValue] = useState<Dayjs | null>(
    dayjs("2022-04-17T00:05:00")
  );
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [read, setRead] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showProgressBar, setShowProgressBar] = useState(false);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(100);

  const startTimer = () => {
    if (
      value &&
      !isNaN(value.minute()) &&
      !isNaN(value.second()) &&
      seconds !== 0
    ) {
      setIsActive(!isActive);
      setRead(!read);
    }
  };

  const pauseTimer = () => setIsActive(false);

  const resetTimer = () => {
    setSeconds(calculateDuration());
    setDuration(calculateDuration());
    setRead(false);
    setIsActive(false);
    setProgress(100);
    setShowProgressBar(false);
  };

  const calculateDuration = () => {
    if (value) {
      const getHours = isNaN(value.hour()) ? 0 : value.hour();
      const getMinutes = isNaN(value.minute()) ? 0 : value.minute();
      const getSeconds = isNaN(value.second()) ? 0 : value.second();
      return getHours * 3600 + getMinutes * 60 + getSeconds;
    }
    return 0;
  };

  const handleCloseAlert = () => {
    setShowAlert(!showAlert);
  };

  useEffect(() => {
    setSeconds(calculateDuration());
    setDuration(calculateDuration());
  }, [value]);

  useEffect(() => {
    let interval: any;
    if (isActive && seconds !== null && seconds >= 0) {
      setShowProgressBar(true);
      interval = setInterval(() => {
        setSeconds((prevSeconds) => {
          const newSeconds = prevSeconds - 1;
          setProgress((newSeconds / duration) * 100);
          return newSeconds;
        });
      }, 1000);
    } else if (seconds < 0) {
      clearInterval(interval);
      setShowAlert(true);
      resetTimer();
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={showAlert}
        onClose={handleCloseAlert}
        autoHideDuration={2000}
        message={
          <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
            Timer Ended
          </Alert>
        }
        key={"top" + "right"}
        className="snackbar"
      />
      <div className="container">
        <div className={`timerDisplay ${showProgressBar ? "h1-to-h2" : ""}`}>
          <h1>{seconds !== null ? formatTime(seconds) : 0}</h1>
        </div>
        <div className={`progressBar ${showProgressBar ? "active" : ""} `}>
          <CircularProgress variant="determinate" value={progress} size={300} />
        </div>
        <div
          className={`timerInput ${showProgressBar ? "moveDown" : "moveUp"}`}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimeField
              value={value}
              onChange={(newValue) => setValue(newValue)}
              format="HH:mm:ss"
              className="timeField"
              disabled={read}
            />
          </LocalizationProvider>
          <div className="button-class">
            <button onClick={isActive ? pauseTimer : startTimer}>
              {isActive ? "Pause" : "Start"}
            </button>
            <button onClick={resetTimer}>Reset</button>
          </div>
        </div>
      </div>
    </>
  );
}

function formatTime(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  return `${padZero(hours)}:${padZero(minutes)}:${padZero(remainingSeconds)}`;
}

function padZero(value: number) {
  return value.toString().padStart(2, "0");
}
