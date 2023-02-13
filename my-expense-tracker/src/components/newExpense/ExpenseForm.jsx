import React, { useState } from "react";

import "../../styles/ExpenseForm.css";

function ExpenseForm(props) {
  const [newTitle, setNewTitle] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newDate, setNewDate] = useState("");

  /* Alternativa de useState
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  }); */

  const titleChangeHandler = (event) => {
    setNewTitle(event.target.value);

    /*  manera alternativa useState
    setUserInput({ ...userInput, title: event.target.value }); 
    
    si depèn d'un estat anterior: 

    setUserInput((prevState) => {
      return {... prevState, title: event.target.value};
    });
    
    */
  };

  const amountChangeHandler = (event) => {
    setNewAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setNewDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: newTitle,
      amount: +newAmount,
      date: new Date(newDate),
    };

    props.onSaveExpenseData(expenseData);
    setNewTitle("");
    setNewAmount("");
    setNewDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} value={newTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={newAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2023-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
            value={newDate}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
