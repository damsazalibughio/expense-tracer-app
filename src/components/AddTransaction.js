import React, {useState} from 'react'

function AddTransaction({ parentCallback }) {
   const [desc, setDesc] = useState('')
   const [amount, setAmount] = useState('')
   

   const AddTransactionData = (e)=>{
       e.preventDefault()
        if(desc !=='' && amount!=='' ){

            parentCallback({
            desc,
            amount
            });
        }
       
       setDesc('')
       setAmount('')

   }
 
    
    return (
        <div>
             <form onSubmit={(e)=>AddTransactionData(e)}>
                <h3 className='h6 font-color-app mt-3'>Add Transaction</h3>         
                <div className=" mb-3 card-width">
                    <input type="text" className="form-control" placeholder="Description" value={desc}  onChange={(e)=> setDesc(e.target.value)}/>
                </div>
                <div className="mb-3 d-flex flex-row card-width">
                    <input type="number" className="form-control"  placeholder="Amount" value={amount} onChange={(e)=> setAmount(e.target.value)}/>
                </div>
                {/* <div className=" my-2 d-flex justify-content-center card-width">
                    <button type='submit' className="btn p-0">
                        <i className="bi bi-plus-circle-fill display-4 text-info px-3"></i>
                        <span className='d-flex flex-column font-color-app'>Income</span>
                    </button>
                    <button type='submit' className="btn p-0" >
                        <i className="bi bi-dash-circle-fill display-4 text-danger px-3"></i>
                        <span className='d-flex flex-column font-color-app'>Expense</span>
                    </button>
                </div> */}
                <div className='card-width' >
                    <button type='submit' className='btn text-white col-12 col-sm-12' style={{backgroundColor:'#445187'}}>Add Transaction</button>
                </div>    
          </form>    
        </div>
    )
}

export default AddTransaction
