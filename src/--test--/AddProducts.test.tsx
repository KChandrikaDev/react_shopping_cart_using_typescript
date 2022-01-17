import AddProducts from "../components/productsFirebase/AddProducts";
import { BrowserRouter } from "react-router-dom";
import { shallow } from "enzyme";
it("renders three <AddProducts /> components", () => {
    const wrapper = shallow(
        <BrowserRouter>
        <AddProducts />
        </BrowserRouter> 
    )
    expect(wrapper.find("h4").text()).toBe("Add Product Item");
  });