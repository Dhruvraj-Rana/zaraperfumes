import React from 'react';
import Transaction from './Transaction';

const ExpenseList = ({ transactions, onDelete }) => {
  return (
    <div>
      <h3>Expenses</h3>
      <ul className="transaction-list">
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;