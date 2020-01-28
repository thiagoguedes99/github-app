
import React, { useState, useEffect } from 'react';


const App = () => {
  const [count, setCount] = useState(0);
  const [newCount, setNewCount] = useState(0);


  useEffect(() => {
    console.log('efeito só no inicial')
  }, [])

  useEffect(() => {
    console.log('efeito só no inicial')
    return () => {
      console.log('efeito só no final')
    };
  }, [])


  useEffect(() => {
    console.log('efeito só no inicial')
  })

  useEffect(() => {
    console.log('efeito só no count')
  }, [count])

  useEffect(() => {
    console.log('efeito só no count')
  }, [newCount])

  return (
    <React.Fragment>
      <button onClick={() => setCount(count + 1 )}>
        clicar
      </button>

      <br/>

      <button onClick={() => setNewCount(newCount + 1 )}>
      clicar outro
    </button>
    </React.Fragment>
  );
}

export default App;