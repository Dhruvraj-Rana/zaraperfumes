// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AddTransaction from './components/AddTransaction';
import Dashboard from './pages/Dashboard';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, text: 'Salary', amount: 3000 },
    { id: 2, text: 'Rent', amount: -1000 },
    { id: 3, text: 'Groceries', amount: -200 },
    { id: 4, text: 'Clothing', amount: -150 },
    { id: 5, text: 'Freelance Work', amount: 500 },
  ]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const onDelete = (id) => {
    const updatedTransactions = transactions.filter(transaction => transaction.id !== id);
    setTransactions(updatedTransactions);
  };

  
  const calculateNetExpense = () => {
    const totalIncome = transactions
      .filter(transaction => transaction.amount > 0)
      .reduce((acc, transaction) => acc + transaction.amount, 0);

    const totalExpense = transactions
      .filter(transaction => transaction.amount < 0)
      .reduce((acc, transaction) => acc + transaction.amount, 0);

    return totalIncome + totalExpense;
  };

  const netExpense = calculateNetExpense();

  return (
    <Router>
      <div className="container">
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<><Dashboard transactions={transactions} onDelete={onDelete} netExpense={netExpense} /><AddTransaction onAdd={addTransaction} /></>} />
            <Route path="/reports" element={<Reports transactions={transactions} />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
