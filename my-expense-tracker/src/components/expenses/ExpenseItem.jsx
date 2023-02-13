import "../../styles/ExpenseItem.css";
import Card from "../Card";
import ExpenseDate from "./ExpenseDate";

//stateless components cuz has no internal state just outputs data

function ExpenseItem(props) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount}€</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
