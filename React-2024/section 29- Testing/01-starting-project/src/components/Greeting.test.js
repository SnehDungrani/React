import React from "react";
import { render, screen } from "@testing-library/react";
import Greeting from "./greeting";
import userEvent from "@testing-library/user-event";

describe("greeting component", () => {
  test('renders "hello World" as a text', () => {
    //Arrange
    render(<Greeting />);

    //Act
    //...nothing

    //Assert

    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("render 'good to see you' if the button was NOT clicked", () => {
    render(<Greeting />);

    const outputElement = screen.getByText("good to see you", {
      exact: false,
    });

    expect(outputElement).toBeInTheDocument();
  });

  test("render 'Changed!' if the button was clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const changedElement = screen.getByText("Changed!", {
      exact: false,
    });

    expect(changedElement).toBeInTheDocument();
  });

  test("does not render 'good to see you' if the button was clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const outputElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
