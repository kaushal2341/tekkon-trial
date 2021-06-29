import styles from './app.module.scss';

import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';

import { Route, Link } from 'react-router-dom';
import {TInfiniteScroller,TTable} from '@tekkon-trial/ui-elements'

export function App() {
  return (
    <div className={styles.app}>
      <header className="flex">
        <Logo width="75" height="75" />
        <h1>Welcome to tekkon-trial-frontend!</h1>
      </header>
      <main>
       <TInfiniteScroller/>
       <TTable/>
      </main>
    </div>
  );
}

export default App;
