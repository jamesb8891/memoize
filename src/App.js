import React, { Component } from "react";
import Cards from "./Cards.js";
import "./App.css";
import "./Cards.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showPopup: true,
      questions: []
    };
  }

  componentDidMount = () => {
    fetch("http://memoize-datasets.herokuapp.com/api/v1/gitquestions")
      .then(response => response.json())
      .then(questions => {
        this.setState({
          questions: questions.gitQuestions
        });
      })
      .catch(error => console.log(error));
  };

  hidePopup = event => {
    event.preventDefault();
    this.setState({
      showPopup: false
    });
  };

  render() {
    if (this.state.showPopup === true) {
      return (
        <div className="App">
          {this.state.showPopup ? (
            <div className="popup">
              <h1>Memoize!</h1>
              <button className="hide-popup-button" onClick={this.hidePopup}>
                Start Game!
              </button>
            </div>
          ) : null}
        </div>
      );
    } else {
      return (
        <div className="App">
          <Cards questions={this.state.questions} />;
        </div>
      );
    }
  }
}

export default App;
