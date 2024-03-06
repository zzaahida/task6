import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addExpense } from './actions';

function AddExpenseForm({ dispatch }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addExpense(name, amount));
    setName('');
    setAmount('');
  };

  return (
    <div>
      <h2>Add Expense&hearts;</h2>
      <form className="expense-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default connect()(AddExpenseForm);
