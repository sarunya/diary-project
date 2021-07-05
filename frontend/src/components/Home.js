import { Component } from "react";
import logo from '../resources/logo.svg';

class Home extends Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (<header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
    </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
    </a>
    </header>)
  }
}

export default Home;