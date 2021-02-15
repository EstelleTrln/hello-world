import React from 'react';
import Layout from "../components/layout"
import styles from "./morpion.module.css"


function Square(props) {
    return (
        <button 
            className={styles.square} 
            onClick={props.onClick}
        >
          {props.value}
        </button>
      );
}

//   Affiche 9 cases, Composant parents qui contrôle le composant enfant : Square (lui attribut ses valeurs, ses évènements)
  class Board extends React.Component {
    renderSquare(i) {
      return (
        <Square 
            value={this.props.squares[i]} 
            onClick={() => this.props.onClick(i)}
        />
      );
    }
  
    render() {
      var content = [];
      var counter = 0;
      //Première boucle de 3 pour faire les lignes 
      for(var i = 0; i < 3; ++i){
        var column = [];
        //Deuxième boucle de 3 pour faire les colonnes
        for(var j = 0; j < 3; ++j){
          var oneSquare = this.renderSquare(counter);
          counter++;
          column.push(oneSquare);
        }
        var row = <div key={i} className={styles.boardRow}>{column}</div>;
        content.push(row);
      };

      return (
        <div>
          {content}
        </div>
      );
    }
  }
  
//   Affiche un plateau avec des valeurs temporaires
export default class Game extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        history: [{
          squares: Array(9).fill(null),
        }],
        stepNumber: 0,
        xIsNext: true,
      };
    }

    handleClick(i) {
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice(); //.slice() permet de créer une copie du tableau existant (squares)
      if(calculateWinner(squares) || squares[i]) {
          return;
      }
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        history: history.concat([{
          squares: squares,
        }]), 
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext,
      });
    }

    jumpTo(step){
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0,
      })
    }

    historic(move, desc){
        var button, selected;
        if(move === this.state.stepNumber){
            button = <b>{desc}</b>;
            selected = styles.select;
        }else{
            button = <i>{desc}</i> ;
            selected = '';
        }

      var li = <li key={move}><button className={selected} onClick={() => this.jumpTo(move)}></button>{button}</li>;

      return li
    }


    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = calculateWinner(current.squares);

      const moves = history.map((step,move) => {
        const desc = move ?
          'Revenir au tour n°' + move :
          'Revenir au début de la partie';
          return (
            this.historic(move, desc, current)
          )
      })

      let status;
      if(winner) {
        status = winner + ' a gagné';
      }else{
          status = 'Joueur suivant : ' + (this.state.xIsNext ? 'X' : 'O');
      }
      return (
        <Layout>
            <div className="row mx-auto">
                <div className="col-md-12 text-center mb-4">
                    <h3>{status}</h3>
                </div>
                <div className="col-md-6">
                    <div className={styles.gameBoard}>
                        <Board 
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className={styles.gameInfo}>
                        <ul>{moves}</ul>
                    </div>
                </div>
            </div>
        </Layout>
      );
    }
  }
  
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  // ========================================

 
// //=========================================
// function BoilingVerdict(props) {
//   if (props.celsius >= 100) {
//     return <p>L'eau bout.</p>;
//   }
//   return <p>L'eau ne bout pas.</p>;
// }

// const scaleNames = {
//   c: 'Celsius',
//   f: 'Fahrenheit'
// };

// function toCelsius(fahrenheit) {
//   return (fahrenheit - 32) * 5 / 9;
// }

// function toFahrenheit(celsius) {
//   return (celsius * 9 / 5) + 32;
// }

// function tryConvert(temperature, convert) {
//   const input = parseFloat(temperature);
//   if (Number.isNaN(input)) {
//     return '';
//   }
//   const output = convert(input);
//   const rounded = Math.round(output * 1000) / 1000;
//   return rounded.toString();
// }


// class Calculator extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
//     this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
//     this.state = {
//       temperature : '',
//       scale : 'c'
//     }
//   }

//   handleCelsiusChange(temperature){
//     this.setState({scale:'c', temperature});
//   }

//   handleFahrenheitChange(temperature){
//     this.setState({scale:'f', temperature});
//   }

//   render() {
//     const scale = this.state.scale;
//     const temperature = this.state.temperature;
//     const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
//     const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

//     return (
//       <div>
//         <TemperatureInput 
//           scale="c"
//           temperature={celsius}
//           onTemperatureChange={this.handleCelsiusChange} />
//         <TemperatureInput 
//           scale="f" 
//           temperature = {fahrenheit}
//           onTemperatureChange={this.handleFahrenheitChange} />
//         <BoilingVerdict
//           celsius = {parseFloat(celsius)} />
//       </div>
//     );
//   }
// }


// class TemperatureInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(e) {
//     this.props.onTemperatureChange(e.target.value);
//   }

//   render() {
//     const temperature = this.props.temperature;
//     const scale = this.props.scale;
//     return (
//       <fieldset>
//         <legend>Saisissez la température en {scaleNames[scale]} :</legend>
//         <input value={temperature}
//                onChange={this.handleChange} />
//       </fieldset>
//     );
//   }
// }

// ReactDOM.render(
//   <Calculator />,
//   document.getElementById('test_water')
// );
