import React from 'react';
import { Header } from './components/Header.js';
import { Balance } from './components/Balance.js';
import { IncomingExpenses } from './components/IncomingExpenses.js';
import { TransactionList } from './components/TransactionList.js';
import { AddTransaction } from './components/AddTransaction.js';
import { GlobalProvider } from './context/GlobalState.js';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomingExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
