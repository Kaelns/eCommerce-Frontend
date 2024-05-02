import { ReactElement } from 'react';
import classes from './App.module.css';
import reactLogo from '@/assets/react.svg';

function App(): ReactElement {
  return (
    <h1 className={classes.title}>
      Welcome to eCommerce Application
      <img src={reactLogo} className="logo" alt="react logo" />
    </h1>
  );
}

export default App;
