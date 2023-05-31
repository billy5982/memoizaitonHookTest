import { ReactNode, useCallback, useEffect, useState } from 'react';
import FirstChild from './components/FirstChild';
import SecondChild from './components/SecondChild';
/*
function Component({ children }: { children: ReactNode }) {
  //
  const [update, setUpdate] = useState<null | string>('null');
  
  return (
    <>
    <button onClick={() => setUpdate('hi')}>{update}</button>
    </>
    );
  }
  
  function App() {
    return (
      <>
      <Component>
      <SecondChild
      onClick={() => {
        console.log('hi');
      }}
      />
      </Component>
      </>
      );
    }
    */

function Component() {
  //
  const [update, setUpdate] = useState<null | string>('null');

  return (
    <>
      <button onClick={() => setUpdate('hi')}>{update}</button>
    </>
  );
}

function App() {
  return (
    <>
      <Component />
      <SecondChild
        onClick={() => {
          console.log('hi');
        }}
      />
    </>
  );
}

export default App;
