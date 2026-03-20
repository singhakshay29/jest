import {render} from "@testing-library/react"
import App from "./App"
import { test } from "vitest";
test("app should display name",()=>{
    const {getByText,debug} =render(<App/>);
    const mainContent  =getByText('Hello Akshay')
    console.log(mainContent);
    
    debug();
})