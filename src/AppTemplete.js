import './App.css';

function App() {
  return (
    <div className="container my-3">
      <div className="container-app">
      <h1 className='text-center h3 font-color-app fw-bold mt-3'>EXPENSE TRACER</h1>
        <div className="row">
         <div className="col-lg-6 col-md-6 my-3">
          <div className='h5 font-color-app'>Balance Sheet</div>
          <div className="card bg-white shadow-sm border-0" style={{maxWidth: '18rem'}}>            
              <div className="card-body py-1 text-center d-flex flex-row justify-content-between">
              <div className="card-title fw-bolder h6 font-color-app d-flex align-items-center">Balance</div>
                <div className="h5 fw-bolder text-info d-flex align-items-center"> $1000</div>
              </div>
          </div>
          <div className="card shadow-sm bg-white mt-2 border-0" style={{maxWidth: '18rem'}}>            
              <div className="card-body py-1 text-center d-flex flex-row justify-content-between">
                <div className="fw-bolder h6 text-success">
                  <div>$500</div>
                  <div className='font-color-app'>Income</div>
                </div>
                <div className='bg-info' style={{width:'1px'}}></div>
                <div className="h6 fw-bolder text-danger">
                  <div>$500</div>
                  <div className='font-color-app'>Expense</div>
                </div>
              </div>
          </div>
           <div className='h5 font-color-app mt-5'>Add Transaction</div>         
           <div class=" mb-3" style={{maxWidth:'18rem'}}>
            <input type="text" class="form-control" placeholder="Description"/>
           </div>
           <div class=" mb-3d-flex flex-row " style={{maxWidth:'18rem'}}>
            <input type="number" class="form-control" placeholder="Income"/>
            {/* <button class="btn btn-outline-danger ms-2" >$Exp</button> */}
           </div>
           <div class=" my-2 d-flex justify-content-center" style={{maxWidth:'18rem'}}>
            <button class="btn p-0" >
               <i class="bi bi-plus-circle-fill display-4 text-info px-3"></i>
               <span className='d-flex flex-column font-color-app'>Income</span>
            </button>
            <button class="btn p-0" >
               <i class="bi bi-dash-circle-fill display-4 text-danger px-3"></i>
               <span className='d-flex flex-column font-color-app'>Expense</span>
             </button>
           </div>       
         </div>
         <div className="col-lg-6 col-md-6  my-3">
         <div className='h5 font-color-app'>Transaction History</div>
          <ul className="list-group" style={{maxWidth: '18rem'}}>
            <li className="list-group-item bg-light my-1 d-flex flex-row justify-content-between border-0 border-end border-danger border-5 shadow-sm">
              <div className='fw-bolder font-color-app'>An item</div>
              <div>$50</div>
            </li>
            <li className="list-group-item bg-light my-1 d-flex flex-row justify-content-between border-0 border-end border-success border-5 shadow-sm">
              <div className='fw-bolder font-color-app'>An item</div>
              <div>$50</div>
            </li>
            
          </ul>
          </div>       
        </div>
      </div>
    </div>
  );
}

export default App;
