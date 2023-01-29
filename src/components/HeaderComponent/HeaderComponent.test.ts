import { HeaderComponent } from "./HeaderComponent.js";

describe("Given a component named HeaderComponent", () => {
  describe("When it's rendered with a header tag", () => {
    test("Then it should render a header in the interface", () => {
      const testContainer = document.createElement("header");
      const tagName = "header";

      const newHeader = new HeaderComponent(testContainer);
      newHeader.render();
      const header = testContainer.querySelector(tagName);

      expect(header).not.toBeNull();
    });
  });
});
