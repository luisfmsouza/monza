import React from "react";
import { shallow } from "enzyme";

import App from "./App";

it("renders without crashing", () => {
  const wrapper = shallow(<App />);

  expect(wrapper.find(".App-logo").length).toBe(1);
  expect(wrapper.find("p").text()).toBe("Edit src/App.js and save to reload.");
  expect(wrapper.find(".App-link").length).toBe(1);
  expect(wrapper.find(".App-link").prop("href")).toBe("https://reactjs.org");
});
