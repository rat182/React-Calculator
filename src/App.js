import React, {Component} from 'react';
import './App.css';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Clear } from './components/Clear';
import * as math from 'mathjs';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }

  isInput = val => {
    if (isNaN(val) && isNaN(this.state.input[this.state.input.length-1])){
     this.setState({input: this.state.input}); 
        }
       else {
     this.setState({input: this.state.input + val});
     }
    }
    
  handleEval = () => {
    if (isNaN(this.state.input[this.state.input.length-1])) {
    this.setState({input: this.state.input});     
    }
    else {
    this.setState({input: math.evaluate(this.state.input)});
    }
  }

  render () {
    return (
      <div className="App">
        <div className="full-wrapper">
          <Input input={this.state.input}></Input>
          <div className="row">
            <Button handleClick={this.isInput}>7</Button>
            <Button handleClick={this.isInput}>8</Button>
            <Button handleClick={this.isInput}>9</Button>
            <Button handleClick={this.isInput}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.isInput}>4</Button>
            <Button handleClick={this.isInput}>5</Button>
            <Button handleClick={this.isInput}>6</Button>
            <Button handleClick={this.isInput}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.isInput}>1</Button>
            <Button handleClick={this.isInput}>2</Button>
            <Button handleClick={this.isInput}>3</Button>
            <Button handleClick={this.isInput}>-</Button>
          </div>
          <div className="row">
            <Button handleClick={this.isInput}>0</Button>
            <Button handleClick={this.isInput}>.</Button>
            <Clear handleClear={() => this.setState({input: ""})}>clear</Clear>
            <Button handleClick={this.isInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={() => this.handleEval()}>=</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
