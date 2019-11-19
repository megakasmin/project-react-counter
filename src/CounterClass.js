import React from "react";
import { Button } from "reactstrap/es";

class CounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleIncrement() {
    this.setState({
      count: this.state.count + 1
    });
  }

  handleDecrement() {
    if (this.state.count <= 0) {
      alert("Stop, sampai di sini !");
    } else {
      this.setState({
        count: this.state.count - 1
      });
    }
  }

  reset() {
    this.setState({
      count: 0
    });
  }

  render() {
    return (
      <div>
        <div>{this.state.count}</div>
        <div>
          <Button color="primary" onClick={() => this.handleIncrement()}>
            +
          </Button>
          <Button color="primary" onClick={() => this.handleDecrement()}>
            -
          </Button>
          <Button color="danger" onClick={e => this.reset()}>
            Reset
          </Button>
        </div>
      </div>
    );
  }
}

export default CounterClass;
