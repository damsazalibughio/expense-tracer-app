import React from 'react'
import BalanceSheet from './BalanceSheet';

function ExpenseIncome({transaction}) {
  // console.log(transaction[0]);
 
  let income =0;
  let expense =0;
  for(let trans of transaction){
   
    if(trans.amount>0){
      income = (+income) + (+trans.amount)
     

    }
    else{
      expense = parseInt(expense) + parseInt(trans.amount)
      console.log(expense)
    
    }
  }
    // let income; 
    // income =income + amount;
  let balance = {
    income,
    expense
  }
    return (
        <div>
          <BalanceSheet currentBalance={balance}/> 
            <div className="card shadow-sm bg-white mt-2 border-0 card-width">            
              <div className="card-body py-1 text-center d-flex flex-row justify-content-between">
                <div className="fw-bolder h6 text-success">                 
                      <div >${income > 0? income :'0'}</div> 
                  <div className='font-color-app'>Income</div>
                </div>
                <div className='bg-info' style={{width:'1px'}}></div>
                <div className="h6 fw-bolder text-danger">
                  <div>{expense === 0? '0' : '-$'+ Math.abs(expense)}</div>
                  <div className='font-color-app'>Expense</div>
                </div>
              </div>
          </div>
        </div>
    )
}

export default ExpenseIncome
