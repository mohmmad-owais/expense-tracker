
import './App.css';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import { GlobalProvider } from './context/GlobalState';

import firebase from './firebase';


function App() {
  const messaging = firebase.messaging();
  messaging.requestPermission().then(()=>{
    return messaging.getToken()
  }).then((token)=> {
  
    console.log('This is Token', token);
  })

  
  
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
        
      </div>
    </GlobalProvider>
  );
}

export default App;
