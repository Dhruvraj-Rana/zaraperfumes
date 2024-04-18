
import React from 'react';
import Transaction from './Transaction';

const IncomeList = ({ transactions, onDelete }) => {
  return (
    <div>
      <h3>Income</h3>
      <ul className="transaction-list">
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
}

export default IncomeList;