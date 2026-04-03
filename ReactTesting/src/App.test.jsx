import {
  //fireEvent,
  screen,
  render,
  fireEvent,
} from "@testing-library/react";
import App from "./App";
import { test, expect, describe } from "vitest";
import Login from "./components/Login";

test("app should display name", () => {
  // const { getByRole } = render(<App />);
  //const mainContent = getByText("Hello Akshay");
  //expect(mainContent).toBeInTheDocument();
  //let btn=getByRole('button');
  //fireEvent.click(btn);
  //let input=getByRole('textbox');
  //expect(input).toHaveValue('');
  //fireEvent.change(input,{target:{value:'Akshay'}});
  //expect(input).toHaveValue('Akshay');
});

describe("Testing React Application using Vitest", () => {
  test("Test the login form", () => {
    const component = render(<App />);
    const firstElement = component.getByText("Login Here");
    expect(firstElement).toBeInTheDocument;

    const labelEmail = component.getByLabelText("Email");
    expect(labelEmail).toBeTruthy();

    const labelPassword = component.getByLabelText("Password");
    expect(labelPassword).toBeTruthy();
  });
  test("Render with two buttons", async () => {
    render(<Login />);
    const buttonList = await screen.findAllByRole("button");
    expect(buttonList).toHaveLength(2);
  });

  //snapshot testing
  test("Snapshot for login component", () => {
    const { asFragment } = render(<Login />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("Email Should accept email", () => {
    render(<Login />);

    const emailInput = screen.getByLabelText("Email");
    fireEvent.change(emailInput, {
      target: { value: "test@example.com" },
    });
    expect(emailInput.value).toBe("test@example.com");
  });

  test("Password Should Accept password", () => {
    render(<Login />);
    const passwordInput = screen.getByLabelText("Password");
    fireEvent.change(passwordInput, {
      target: { value: "123456A" },
    });
    expect(passwordInput.value).toBe("123456A");
  });

  test("Reset Button Should Reset form", () => {
    render(<Login />);
    const resetBtn = screen.getByTestId("reset");
    const emailInput = screen.getByLabelText("Email");
    fireEvent.change(emailInput, {
      target: { value: "test@example.com" },
    });
    const passwordInput = screen.getByLabelText("Password");
    fireEvent.change(passwordInput, {
      target: { value: "123456A" },
    });
    fireEvent.click(resetBtn);
    expect(emailInput.value).toMatch("");
    expect(passwordInput.value).toBe("");
  });
  
  test("should Be able to submit form for success case",()=>{
    render(<Login/>);
    const submtiBtn = screen.getByTestId('submit');
    const emailInput = screen.getByLabelText("Email");
    fireEvent.change(emailInput, {
      target: { value: "test@example.com" },
    });
    const passwordInput = screen.getByLabelText("Password");
    fireEvent.change(passwordInput, {
      target: { value: "123456A" },
    });
    fireEvent.click(submtiBtn);
    expect(emailInput.value).toMatch("");
  })
  
  test("should Be able to submit form for error case",()=>{
    render(<Login/>);
    const submtiBtn = screen.getByTestId('submit');
    const emailInput = screen.getByLabelText("Email");
    fireEvent.change(emailInput, {
      target: { value: "testexample.com" },
    });
    const passwordInput = screen.getByLabelText("Password");
    fireEvent.change(passwordInput, {
      target: { value: "123456A" },
    });
    fireEvent.click(submtiBtn);
    expect(emailInput.value).toMatch("testexample.com");
  })
});
