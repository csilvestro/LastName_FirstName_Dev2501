// import logo from './logo.svg';
import './App.css';


function App(){

  return (
    <div className="App">
      <Header style={styles.container} /> 
    </div>
  );
}

export default App;

const styles = {
  container: {
    display: 'flex',
    backgroundColor: 'black'
  },
  column: {
    width: '20%'
  }
}
