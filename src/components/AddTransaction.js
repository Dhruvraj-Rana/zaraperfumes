import React, { useState } from 'react';

const AddTransaction = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const onSubmit = e => {
    e.preventDefault();
    onAdd({ text, amount: +amount });
    setText('');
    setAmount(0);
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Enter text..." />
      <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Enter amount..." />
      <button>Add Transaction</button>
    </form>
  );
}

export default AddTransaction;
