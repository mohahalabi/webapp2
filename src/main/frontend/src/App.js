import React from 'react';
import PizzaConfigurator from './components/PizzaConfigurator';


function App() {

  return (
    <div className="container py-4">
      <div className="row mb-5 border-bottom justify-content-center align-items-center">
        <div className="col-lg-8">
          <h1 className="display-3 text-dark text-center">Farcisci la tua Pizza</h1>
        </div>
      </div>
      <div className="row" style={{ height: '100%' }}>
        <div className="col-12">
          <PizzaConfigurator />
        </div>
      </div>
    </div>
  );
}


export default App;
