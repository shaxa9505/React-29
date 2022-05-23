import React, {useState} from 'react';
import Clicker from './Clicker';

function App(props) {

    const [loading, setLoading] = useState(false)

    
    return (
        <div className="App">
            <button onClick={() => setLoading(true)} className="reset">Add Clicker</button> 
            <button onClick={() => setLoading(false)} className="stop">Reset Clicker</button> 
            
            {loading && <Clicker post={loading} /> }
        </div>
    );
}

export default App;