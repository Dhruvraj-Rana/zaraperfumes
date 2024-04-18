
import React from 'react';

const Transaction = ({ transaction, onDelete }) => {
  const sign = transaction.amount < 0 ? '-' : '+';

  const handleDelete = () => {
    
    onDelete(transaction.id);
  };

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text} <span>{sign}₹{Math.abs(transaction.amount)}</span>
      <button onClick={handleDelete}>x</button> {/* Attach onClick event handler */}
    </li>
  );
}

export default Transaction;