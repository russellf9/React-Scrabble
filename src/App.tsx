import * as React from 'react';
import './App.css';
import { Scrabble } from './components/scrabble/Scrabble';

export interface AppProps {
  complete: boolean;
  errorMessage: string;
  lastWord: string;
  placeholder: string;
  result: number;
  search: string;
}

export default class App extends React.Component<{}, {}> {
  constructor(props: AppProps) {
    super(props);
  }

  public render() {
    return (
      <div className="App">
        <Scrabble  />
      </div>
    );
  }
}