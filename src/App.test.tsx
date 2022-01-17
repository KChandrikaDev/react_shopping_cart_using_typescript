import Test from "./Test";
import { shallow } from "enzyme";

it("renders three <App /> components", () => {
  const wrapper = shallow(<Test />);
  expect(wrapper.find("h1").text());
});
