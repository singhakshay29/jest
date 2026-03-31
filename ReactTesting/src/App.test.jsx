import { fireEvent, render } from "@testing-library/react";
import App from "./App";
import { test, expect } from "vitest";

test("app should display name", () => {
  const { getByText,getByRole } = render(<App />);
  const mainContent = getByText("Hello Akshay");

  expect(mainContent).toBeInTheDocument();
  let btn=getByRole('button');
  fireEvent.click(btn);
  
  let input=getByRole('textbox');
  expect(input).toHaveValue('');
  
  fireEvent.change(input,{target:{value:'Akshay'}});
  expect(input).toHaveValue('Akshay');
  
});