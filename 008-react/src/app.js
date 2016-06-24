import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
  render() {
    return <div>
      <h1>{this.props.value}</h1>
      <button onClick={this.props.onIncrement}>+</button>
    </div>
  }

  componentDidUpdate(){
    console.log("update ", this.props.index);
  }

  shouldComponentUpdate(newProps){
    return newProps.value !== this.props.value;
  }

  onMyIncrement(){
    this.props.onIncrement(this.props.index);
  }
}

Counter.propTypes = {
  value: React.PropTypes.number.isRequired,
  onIncrement: React.PropTypes.func.isRequired
};

Counter.defaultProps = {
  onIncrement: () => {
  }
};

class CounterState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counts: [
        1,
        3,
        5
      ]
    };

    this.onIncrement = this.onIncrement.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  render() {
    return <div>
      {this.state.counts.map(
          (value, index) => <Counter value={value}
                                     index={index}
                                     key={index}
                                     onIncrement={this.onIncrement.bind(null, index)}/>)
      }
      <input value={this.state.counts[0]}
              onChange={this.onChange} />
    </div>
  }

  onChange({target: {value}}) {
    let number = parseInt(value)
    if (isNaN(number)){
      return
    }
    let newCounts = this.state.counts.slice();
    newCounts[0] = number;

    this.setState({
      counts: newCounts
    }, () => {
      console.log(this.state);
    })
  }

  onIncrement(index) {
    let newCounts = this.state.counts.slice();
    newCounts[index]++;

    this.setState({
      counts: newCounts
    }, () => {
      console.log(this.state);
    })
  }
}

ReactDOM.render(<CounterState/>,
    document.getElementById('root'));
