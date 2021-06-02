import { Component, Fragment } from 'react';
import './App.css';
var counter = 0;
class App extends Component {
// constructor(props){
//   super(props);
//   this.state = {
//     plus: [],
//   }
//   this.plus = this.plus.bind(this);
}

function App() {
  function plus(){
      alert(counter += 1)
      document.getElementById('increment-btn').value = "{counter} Likes"
      }
  return (

    <div className="App">
      <button id="increment-btn" onClick= {()=>{this.plus}}>{counter} Likes</button>
    </div>
  );


}
}

export default App;
