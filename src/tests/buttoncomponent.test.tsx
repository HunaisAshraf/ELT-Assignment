import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ButtonComponent from "../components/ButtonComponent";
import { CourseContext } from "../context/CourseContext";

const mockContextValue = {
  handleBooking: () => {},
};

describe("ButtonComponent", () => {
  it('should render "Join" button when status is "Booked" and schedule is in the past', () => {
    render(
      <CourseContext.Provider value={mockContextValue}>
        <ButtonComponent
          id={1}
          status="Booked"
          schedule={new Date(Date.now() - 3600 * 1000)}
        />
      </CourseContext.Provider>
    );

    const buttonElement = screen.getByRole("button", { name: /Join/i });
    expect(buttonElement).toBeInTheDocument();
  });
});
