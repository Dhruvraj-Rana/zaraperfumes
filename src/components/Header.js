import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Budget Tracker App</h1>
      <nav>
        <ul>
          <li><a href="/">Dashboard</a></li>
          <li><a href="/reports">Reports</a></li>
          <li><a href="/settings">Settings</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
