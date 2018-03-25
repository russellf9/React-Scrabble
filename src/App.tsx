import * as React from 'react';
import './App.css';
import { Scrabble } from './components/scrabble/Scrabble';

interface WordProps {
  search: string;
  lastWord: string;
  result: number;
  errorMessage: string;
}

export default class App extends React.Component<{}, {}> {
  constructor(props: WordProps) {
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