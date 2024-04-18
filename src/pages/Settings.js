import React, { useState } from 'react';

const Settings = () => {
  
  const [budget, setBudget] = useState('');
  const [goal, setGoal] = useState('');

  
  const handleBudgetSubmit = (e) => {
    e.preventDefault();
   
    console.log('Budget submitted:', budget);
  };

  
  const handleGoalSubmit = (e) => {
    e.preventDefault();
    
    console.log('Goal submitted:', goal);
  };

  return (
    <div>
      <h2>Settings</h2>
      <p>Configure your budget settings and track progress towards your financial goals.</p>
      
      {/* Budget Settings Form */}
      <form onSubmit={handleBudgetSubmit}>
        <label>
          Budget:
          <input type="text" value={budget} onChange={(e) => setBudget(e.target.value)} />
        </label>
        <button type="submit">Save Budget</button>
      </form>

      {/* Goal Tracking Form */}
      <form onSubmit={handleGoalSubmit}>
        <label>
          Goal:
          <input type="text" value={goal} onChange={(e) => setGoal(e.target.value)} />
        </label>
        <button type="submit">Set Goal</button>
      </form>
    </div>
  );
}

export default Settings;
