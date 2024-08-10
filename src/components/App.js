import { Component } from "../core/Component";
import { Form } from "./Form";
import { List } from "./List";
import { ListItem } from "./ListItem";
export class App extends Component {
  setup(props) {
    this.state = { total: 0, donates: [] };
    this.$rootElement = document.createElement("div");
    this.$rootElement.className = "app";

    this.$h1 = document.createElement("h1");
    this.$h1.className = "total-amount";
    this.$h1.textContent = "Итого: $ ";

    this.$total = document.createElement("span");
    this.$total.textContent = this.state.total;

    this.$h1.appendChild(this.$total);

    this.$rootElement.appendChild(this.$h1);

    const donateForm = new Form({ onSubmit: this.onItemCreate.bind(this) });
    this.$rootElement.appendChild(donateForm.$rootElement);
    const donateList = new List();
    this.$rootElement.appendChild(donateList.$rootElement);

    this.donateList = donateList;
  }

  onItemCreate(amount) {
    const item = new ListItem({
      amount: amount,
      onDelete: this.onItemDelete.bind(this),
    });

    this.state.donates.push(item);
    this.donateList.addItem(item);

    this.state.total = this.state.total + Number(amount);
    this.$total.textContent = this.state.total;
  }

  onItemDelete(itemId) {
    const deletedItem = this.state.donates.find(
      (item) => item.state.id === itemId
    );

    if (deletedItem) {
      this.state.total -= Number(deletedItem.state.amount);
      this.$total.textContent = this.state.total;
    }

    this.state.donates = this.state.donates.filter(
      (item) => item.state.id !== itemId
    );

    const element = this.donateList.$rootElement.querySelector(
      `[data-id="${itemId}"]`
    );
    if (element) {
      element.remove();
    }
  }
}
