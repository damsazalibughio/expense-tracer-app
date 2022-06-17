import React from 'react'

function TransactionList({transaction}) {
    return (
        <div className='mt-3'>
            <div className='h6 font-color-app'>{transaction.length>0 ?'Transaction History':''}</div>
                <ul className="list-group card-width">
                    {transaction.map((transData, index)=>{
                        return(
                            <li key={index} className={`list-group-item bg-light mb-2
                            d-flex flex-row justify-content-between border-0
                             border-end border-5 shadow-sm ${transData.amount > 0? 'border-success':'border-danger'}` }>
                                <div className='fw-bolder font-color-app'>{transData.desc}</div>
                                <div>{transData.amount}</div>
                            </li>
                        )
                    })}
                    
                    {/* <li className="list-group-item bg-light mb-2 d-flex flex-row justify-content-between border-0 border-end border-success border-5 shadow-sm">
                        <div className='fw-bolder font-color-app'>An item</div>
                        <div>$50</div>
                    </li> */}
                    
                </ul>         
        </div>
    )
}

export default TransactionList
