import './App.css';
import txios from "./apis/txios";
import React from 'react';
function App() {
 
  const [orderResult, setOrderResult] = React.useState(undefined);
 
  const onClickTxios = () => {
    // 요청 파라미터 준비
    const rtid = "rt_20230224064821";
    const order = {
      service_name: "order",
      payload: {
        Combine: {
          index: 1,
        },
      },
    };

    // txios요청
    txios
      .start(rtid, order) // request
      .then((txResponse) => {
        setOrderResult(JSON.stringify(txResponse, null, 2));
      }) 
      .catch(txError => console.log(txError)); // exception
  }
  return (
    <div className="App">
      <div className="wrapper">
        <button onClick={ onClickTxios }>Request Txios</button>
      </div>
      <textarea 
        id="response-area" 
        placeholder="result here"
        defaultValue={ orderResult }
      /> 
    </div>
  );
}


export default App;
