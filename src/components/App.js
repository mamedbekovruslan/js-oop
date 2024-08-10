import { Component } from "../core/Component";
import { Form } from "./Form";
import { List } from "./List";
import { ListItem } from "./ListItem";

export class App extends Component {
  setup(props) {
    this.state = { total: 0, donates: [] };
    this.$rootElement = document.createElement("div");
    this.$rootElement.className = "app";

    // Как-то не очень
    this.$h1 = document.createElement("h1");
    this.$h1.className = "total-amount";
    this.$h1.textContent = "Итого: $ ";
    // Как-то не очень

    // Как-то не очень
    this.$total = document.createElement("span");
    this.$total.textContent = this.state.total;

    // Как-то не очень
    this.$h1.appendChild(this.$total);
    // Как-то не очень

    this.$rootElement.appendChild(this.$h1);

    const donateForm = new Form();
    this.$rootElement.appendChild(donateForm.$rootElement);
    const donateList = new List();
    this.$rootElement.appendChild(donateList.$rootElement);
  }

  onItemCreate(amount) {
    // ...
  }
}
