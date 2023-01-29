import { type ComponentStructure } from "../../types.js";

class Component implements ComponentStructure {
  public element: Element;
  private readonly parentElement: Element;

  constructor(parentElement: Element, className: string, tagName = "div") {
    this.element = document.createElement(tagName);
    this.element.className = className;
    this.parentElement = parentElement;
  }

  render(): void {
    this.parentElement.appendChild(this.element);
  }
}

export default Component;
