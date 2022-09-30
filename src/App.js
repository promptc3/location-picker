import './App.css';
import {useState} from "react";

function DropDown(props) {
  if (props.show) {
    return (
    <div className="dropdown">
      <h4>Welcome to Dropdown</h4>
      <ul>
        <li>{props.value}</li>
      </ul>
    </div>
    )
  }
  else {
    return (<div></div>);
  }
}
function App() {
  const [location, setLocation] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const handleChange = e => {
    setLocation(e.target.value);
  }
  const handleFocus = () => {
    setShowDropdown(true);
  }
  const handleBlur = () => {
    setShowDropdown(false);
  }
  return (
    <div className="App">
      <input
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      value={location} className="app-input" type="text" placeholder="Enter Location"></input>
      <DropDown value={location} show={showDropdown}/>
    </div>
  );
}

export default App;
