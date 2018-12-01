import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div>
      <p>React here!</p>
      <div className="ui labeled button" tabIndex="0">
        <div className="ui red button">
          <i className="heart icon"></i> Like
        </div>
        <a className="ui basic red left pointing label">
          1,048
        </a>
      </div>
      <div className="ui labeled button" tabIndex="0">
        <div className="ui basic blue button">
          <i className="fork icon"></i> Forks
        </div>
        <a className="ui basic left pointing blue label">
          1,048
        </a>
      </div>
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
