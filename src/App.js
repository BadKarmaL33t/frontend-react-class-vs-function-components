import React, {useState} from 'react';
import './App.css';

function App() {
    const [light, toggleLight] = useState(true);

    function handleClick()  {
        toggleLight(!light);
    }


    return (
        <button
            type="button"
            onClick={handleClick}
        >
            {light ? 'AAN' : 'UIT'}
        </button>
  );
}

export default App;
