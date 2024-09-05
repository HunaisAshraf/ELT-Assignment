import React from "react";
import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { FiClock, FiExternalLink } from "react-icons/fi";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "./ui/dialog";
import { CourseContext } from "../context/CourseContext";
import { ContextState } from "../constants/type";

type ButtonType = {
  id: number;
  status: "Booked" | "Not Booked";
  schedule: Date;
};

const ButtonComponent = ({ id, status, schedule }: ButtonType) => {
  const { handleBooking } = useContext(CourseContext) as ContextState;
  const [timeLeft, setTimeLeft] = useState<string>("00:00:00");

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = moment();
      const endTime = moment(schedule);
      const diffSeconds = endTime.diff(now, "seconds");

      if (diffSeconds > 0) {
        const hours = Math.floor(diffSeconds / 3600);
        const minutes = Math.floor((diffSeconds % 3600) / 60);
        const seconds = diffSeconds % 60;
        if (hours > 23) {
          setTimeLeft(moment(schedule).startOf("hours").fromNow().substring(2));
        } else {
          setTimeLeft(
            [
              hours.toString().padStart(2, "0"),
              minutes.toString().padStart(2, "0"),
              seconds.toString().padStart(2, "0"),
            ].join(":")
          );
        }
      } else {
        setTimeLeft("00:00:00");
      }
    };

    const intervalId = setInterval(calculateTimeLeft, 1000);

    calculateTimeLeft();

    return () => clearInterval(intervalId);
  }, [schedule]);
  return (
    <div>
      {status === "Booked" ? (
        <>
          {new Date(schedule) < new Date() ? (
            <button className="flex items-center justify-center gap-4 text-sm font-semibold border-2 border-[#EEEEEE] bg-[#2080F6] text-white rounded-lg w-full sm:w-28 h-10">
              Join <FiExternalLink className="text-xl font-bold" />
            </button>
          ) : (
            <button className="flex items-center justify-center gap-2 text-sm font-semibold text-[#737475] w-full sm:w-28 h-10 hover:text-blue-600">
              {timeLeft} <FiClock className="text-xl font-bold" />
            </button>
          )}
        </>
      ) : (
        <Dialog>
          <DialogTrigger className="text-sm font-semibold border-2 border-[#EEEEEE] rounded-lg w-full sm:w-28 h-10 shadow-sm">
            Book Now
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you sure?</DialogTitle>
              <DialogDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua ?
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="flex justify-end">
              <DialogClose asChild>
                <button className="text-sm font-semibold border-2 border-[#EEEEEE] rounded-lg w-28 h-10 shadow-sm">
                  Close
                </button>
              </DialogClose>
              <button
                onClick={() => handleBooking(id)}
                className="text-sm font-semibold border-2 border-[#EEEEEE]  bg-[#2080F6] text-white rounded-lg w-28 h-10 shadow-sm"
              >
                Confirm
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default ButtonComponent;
