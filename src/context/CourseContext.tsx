import React from "react";
import { data } from "../constants/data";
import { ContextState, Course } from "@/constants/type";
import { ReactNode, useEffect, useState } from "react";
import { createContext } from "react";

const defaultCourse: ContextState = {
  courses: [],
  handleBooking: () => {},
  handleFilter: () => {},
  noOfItem: 0,
  noOfPage: 0,
  page: 0,
  setNoOfItem: () => {},
  setPage: () => {},
};

export const CourseContext = createContext<ContextState | null>(defaultCourse);

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [courses, setCourses] = useState<Course[]>(data);
  const [page, setPage] = useState(1);
  const [noOfItem, setNoOfItem] = useState(10);
  const [noOfPage, setNoOfPage] = useState(1);

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setCourses((prev) => prev.filter((item) => item.status === "Booked"));
    } else {
      setCourses(data);
    }
  };
  const handleBooking = (id: number) => {
    setCourses((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          item.status = "Booked";
        }
        return item;
      })
    );
  };

  useEffect(() => {
    let start = (page - 1) * noOfItem;
    let filteredCourses = data.slice(start, noOfItem);
    setCourses(filteredCourses);
    setNoOfPage(data.length / noOfItem);
  }, [noOfItem]);

  useEffect(() => {
    let start = (page - 1) * noOfItem;
    let filteredCourses = data.slice(start, noOfItem * page);
    setCourses(filteredCourses);
  }, [page]);

  return (
    <CourseContext.Provider
      value={{
        courses,
        handleBooking,
        handleFilter,
        page,
        noOfItem,
        setPage,
        setNoOfItem,
        noOfPage,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export default ContextProvider;
