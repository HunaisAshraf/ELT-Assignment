import React from "react";
import moment from "moment";
import { Course } from "../constants/type";
import ButtonComponent from "./ButtonComponent";
import { useEffect, useState } from "react";

const CourseComponent = ({ course }: { course: Course }) => {
  const [timeLeft, setTimeLeft] = useState<string>("00:00:00");
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = moment();
      const startTime = moment(course.schedule);
      const diffSeconds = startTime.diff(now, "seconds");

      if (diffSeconds > 0) {
        setTimeLeft(moment(course.schedule).format("lll"));
      } else {
        const hours = Math.abs(Math.floor(diffSeconds / 3600));
        const minutes = Math.abs(Math.floor((diffSeconds % 3600) / 60));
        if (hours > 23) {
          setTimeLeft(moment(course.schedule).startOf("hours").fromNow());
        } else {
          setIsLive(true);
          setTimeLeft(
            [
              hours.toString().padStart(2, "0"),
              minutes.toString().padStart(2, "0"),
            ].join(":")
          );
        }
      }
    };

    const intervalId = setInterval(calculateTimeLeft, 1000);

    calculateTimeLeft();

    return () => clearInterval(intervalId);
  }, [course.schedule]);
  return (
    <>
      <div className="flex justify-start gap-3 items-center">
        <p className="hidden md:block text-[#A1A0A3] text-sm">{course.id}</p>
        <div className="w-full flex sm:block justify-between items-center">
          <p className=" sm:text-sm font-semibold text-[#222124]">
            {course.title}
          </p>
          <p className="text-[#5F5F61] text-sm my-1 flex items-center gap-1">
            {isLive ? (
              <>
                <span className="text-red-600 text-sm font-medium flex items-center">
                  <span className="block w-2.5 h-2.5 rounded-full bg-red-600 mr-1"></span>
                  Live{" "}
                </span>
                <span>({timeLeft})</span>
              </>
            ) : (
              <span>{timeLeft}</span>
            )}
          </p>
        </div>
      </div>
      <div className="flex justify-start gap-3 items-center">
        <img
          src={course.image}
          alt="profile"
          className="h-9 w-9 rounded-full"
        />
        <div>
          <p className="text-sm sm:font-semibold text-[#222124]">
            <span className="sm:hidden">by</span> {course.instructor}
          </p>
          <p className="hidden sm:block text-[#5F5F61] text-sm sm:my-1">
            Additional Details
          </p>
        </div>
      </div>
      <ButtonComponent
        id={course.id}
        status={course.status}
        schedule={course.schedule}
      />
    </>
  );
};

export default CourseComponent;
