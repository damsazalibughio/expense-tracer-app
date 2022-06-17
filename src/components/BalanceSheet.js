import React from 'react'

function BalanceSheet({currentBalance}) {
    console.log( currentBalance.income)
    let balance;
    balance = parseInt(currentBalance.income) + parseInt(currentBalance.expense);
    console.log(balance)
    return (
        <div>
             <div className='h6 font-color-app'>Balance Sheet</div>
            <div className="card bg-white shadow-sm border-0 card-width">            
                <div className="card-body py-1 text-center d-flex flex-row justify-content-between">
                <div className="card-title fw-bolder h6 font-color-app d-flex align-items-center">Balance</div>
                    <div className={`"h5 fw-bolder d-flex align-items-center" ${balance>=0 ? 'text-success':'text-danger'}`}>
                        {balance>=0?'$'+balance:'-$'+Math.abs(balance)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BalanceSheet
