import React from 'react';
import { connect } from 'react-redux';

function TotalExpenses({ total }) {
  return (
    <div className="total-expenses">
      <h2>Total Expenses&hearts;</h2>
      <p>Total&hearts;: ${total}</p>
    </div>
  );
}

const mapStateToProps = state => ({
  total: state.expenses.reduce((acc, expense) => acc + expense.amount, 0)
});

export default connect(mapStateToProps)(TotalExpenses);
