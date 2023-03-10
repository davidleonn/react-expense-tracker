import { useState } from "react";

import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Techno",
    amount: 94.12,
    date: new Date(2023, 1, 21),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2023, 1, 21) },
  {
    id: "e3",
    title: "Car Quota",
    amount: 294.67,
    date: new Date(2023, 5, 19),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2023, 6, 19),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </>
  );
}

export default App;
