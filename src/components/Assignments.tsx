import React from "react";
import { assignmentList } from "../constants/data";

const Assignments = () => {
  return (
    <div className="hidden lg:block bg-white md:w-[590px] rounded-md p-5">
      <h1 className="text-lg font-semibold">
        Assignments{" "}
        <span className="text-[#737475]">({assignmentList.length})</span>
      </h1>

      <div className="my-3">
        {assignmentList.map((assignment, i) => (
          <div
            key={i}
            className="px-3 py-2 border-2 border-[#EEEEEE] rounded-lg my-4"
          >
            <p className="text-sm font-medium">{assignment.title}</p>
            <p className="text-[#737475] text-sm">
              Deadline : {assignment.deadline}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assignments;
