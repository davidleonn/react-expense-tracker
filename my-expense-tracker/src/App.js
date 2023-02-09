import Expenses from "./components/expenses/Expenses";

function App() {
  const expenses = [
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
  return (
    <>
      <h2>Start</h2>
      <Expenses items={expenses} />
    </>
  );
}

export default App;
