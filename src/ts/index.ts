import { HeaderComponent } from "./components/HeaderComponent/HeaderComponent.js";
import PageComponent from "./components/PageComponent/PageComponent.js";

const pageComponent = new PageComponent();
pageComponent.render();

const container = document.querySelector(".page-container")!;

const headerComponent = new HeaderComponent(container);
headerComponent.render();
