import React, {useState} from 'react'
import './App.css';
import AddTransaction from './components/AddTransaction';
// import BalanceSheet from './components/BalanceSheet';
import ExpenseIncome from './components/ExpenseIncome';
import TransactionList from './components/TransactionList';

function App() {
  let [transaction, setTransaction] = useState([])
  const callback = (transactionChild) => {
  
  // transaction =[...transaction]
    setTransaction([...transaction,{
      desc:transactionChild.desc,
      amount:transactionChild.amount
    } ])

    transaction =[{
      desc:transactionChild.desc,
      amount:transactionChild.amount
    }]

    console.log(transaction);
    
  }
 
  return (
    <div className="container my-3">
      <div className="container-app">
        <h1 className='text-center h3 font-color-app fw-bold'>EXPENSE TRACER  </h1>
        <div className="row mt-3">

          <div className="col-lg-6 col-md-6">         
          {/* <BalanceSheet/>  */}
          <ExpenseIncome transaction={transaction}/>
          <AddTransaction parentCallback={callback}/> 
          </div>

          <div className="col-lg-6 col-md-6">
              <TransactionList transaction={transaction}/>   
              
          </div>

        </div>
    </div>
    </div>
  );
}

export default App;
