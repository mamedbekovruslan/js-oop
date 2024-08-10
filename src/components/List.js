import { Component } from "../core/Component";

export class List extends Component {
  setup() {
    this.$rootElement = document.createElement("div");
    this.$rootElement.className = "donates-container";

    this.$listContainer = document.createElement("div");
    this.$listContainer.className = "donates-container";

    this.$h2 = document.createElement("h2");
    this.$h2.className = "donates-container__title";
    this.$h2.textContent = "Список донатов";

    this.$listContainer.appendChild(this.$h2);
    this.$rootElement.appendChild(this.$listContainer);
    // ...
  }

  addItem(item) {
    // ...
  }
}
