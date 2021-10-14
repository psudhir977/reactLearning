import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Square extends React.Component { //this is a react component

    constructor(props){ // why we need a constructor
        super(props); // what is use of this code ? 
        this.state={
            value: null, // what is value
        };
    }

    /*render() {
      return (
        // difference in writing function ain ES6 way and in traditional way
        //<button className="square" onClick= {function() {console.log('click');}}> 
          //{this.props.value}
        //</button>
        <button className="square" onClick={()=>{console.log("Click")}}>
            // value attribute is not declared yet but how its getting initialised.
            {this.props.value}
        </button>
      );
    }*/

    render(){ // render is a function 
         return (
                <button className="square" onClick={
                    ()=> {this.setState({value: 'Y'})}}>
                    {this.state.value} 
                  
                </button>
        )
    }
  }
  
  class Board extends React.Component { //this is a react component
  
    constructor(props){
      super(props);
      this.state={
        squares: Array(9).fill(null),
      }
    }
  
    renderSquare(i) {
      //return <Square />;
      return < Square value={i}/>; // is this the way we are calling a class component
    }
  
    render() {
      const status = 'Next player: X';  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)} 
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component { //react component
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
// ========================================
//--------------------------------------
  const name = 'Sudhir';

const element = <h1>Hello,{name}</h1>

ReactDOM.render(
    element,
    document.getElementById('root')
);
//--------------------------------------
function formatName(user){
  return user.firstN
}

//--------------------------------
 /* ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );*/
  