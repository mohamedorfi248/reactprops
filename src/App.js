import './App.css';
import Profile from "./Component.js/Profile"
import PropTypes from 'prop-types';
function App() {
  return (
    <div className="App">
      <Profile name="mohamed" age= "19" proffession = "future web developer " />
    </div>
  );
}

export default App;
