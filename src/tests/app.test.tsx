import React from "react";
import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import App from "../App";

describe("app", () => {
  it("render app component", () => {
    render(<App />);
  });
});
