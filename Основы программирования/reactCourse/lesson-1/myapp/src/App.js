
import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <p className={`${props.name ? 'message' : 'message-red'}`}>{props.name? props.name : props.lastName} begin to learn React!</p>
      </header>
    </div>
  );
}

export default App;
