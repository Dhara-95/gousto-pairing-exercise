import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { App } from "./App";

describe("App", () => {
  it("renders the App header", () => {
    render(<App />);
    const header = screen.getByText("Gousto Pairing Exercise");

    expect(header).toBeInTheDocument();
  });
});
