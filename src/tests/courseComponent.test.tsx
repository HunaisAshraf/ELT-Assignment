import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CourseComponent from "@/components/CourseComponent";
import { data } from "@/constants/data";

describe("app", () => {
  it("render app component", () => {
    render(<CourseComponent course={data} />);
  });
});
