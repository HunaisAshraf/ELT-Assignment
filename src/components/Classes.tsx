import React from "react";
import { useContext } from "react";
import CourseComponent from "./CourseComponent";
import { CourseContext } from "../context/CourseContext";
import { ContextState } from "../constants/type";

const Classes = () => {
  const { courses, handleFilter } = useContext(CourseContext) as ContextState;

  return (
    <div className="bg-white min-h-[600px] w-full lg:w-[642px] rounded-md p-5">
      <div className="flex justify-between items-center">
        <div className="text-[#313336]">
          <p className="md:text-lg font-semibold ">Upcoming Classes</p>
          <p className="text-sm">For next 7 days</p>
        </div>
        <div className="flex items-center gap-3">
          <label className="text-sm">Booked Only</label>
          <input
            type="checkbox"
            className="outline-slate-600 border-2 border-slate-400"
            onChange={handleFilter}
            placeholder="filter"
          />
        </div>
      </div>

      <div className="hidden md:grid grid-cols- md:grid-cols-3 lg:grid-cols-3 sm:gap-6 bg-[#F6F6F6] text-xs text-[#5F5F61] px-6 py-3 my-4">
        <span>Class name</span>
        <span>Instructor</span>
        <span>Actions</span>
      </div>
      {courses.map((course) => (
        <div
          key={course.id}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-7 px-6 py-2 border-2 rounded-lg my-3"
        >
          <CourseComponent course={course} />
        </div>
      ))}
    </div>
  );
};

export default Classes;
