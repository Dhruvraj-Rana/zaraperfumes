import React from 'react';
import ExpenseList from '../components/ExpenseList';

const Dashboard = ({ transactions, onDelete }) => {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to your dashboard!</p>
      {transactions && transactions.length > 0 ? (
        <ExpenseList transactions={transactions} onDelete={onDelete} />
      ) : (
        <p>No expenses to display</p>
      )}
    </div>
  );
}

export default Dashboard;