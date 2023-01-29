import { CardsListComponent } from "./CardsListComponent.js";

describe("Given a component named 'CardsListComponent'", () => {
  describe("When it's rendered with a tag name 'section'", () => {
    test("Then it should render a 'section' on the interface", () => {
      const testContainer = document.createElement("section");
      const tagName = "section";

      const newCardsList = new CardsListComponent(testContainer);
      newCardsList.render();
      const cardList = testContainer.querySelector(tagName);

      expect(cardList).not.toBeNull();
    });
  });
});
