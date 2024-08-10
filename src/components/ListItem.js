import moment from "moment";
import { Component } from "../core/Component";

export class ListItem extends Component {
  setup(props) {
    this.state = { id: Date.now(), date: new Date(), amount: props.amount };

    this.$rootElement = document.createElement("div");
    this.$rootElement.className = "donate-item";
    this.$rootElement.textContent = `${moment(this.state.date).format(
      "DD/MM/YYYY, hh:mm:ss"
    )} - $${this.state.amount}`;
    this.$rootElement.dataset.id = this.state.id;

    this.$button = document.createElement("button");
    this.$button.className = "delete-button";
    this.$button.textContent = "Удалить";

    this.$rootElement.appendChild(this.$button);

    this.$rootElement.addEventListener("click", this.deleteItem.bind(this));
  }

  deleteItem(event) {
    console.log(this.props.donates);

    console.log(event.target.parentNode.getAttribute("data-id"));
  }
}
