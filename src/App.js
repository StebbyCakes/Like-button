import { Component, Fragment } from 'react';
import './App.css';
class App extends Component {

constructor(props) {
  super(props);

  this.state = { //state is just an object with key value pairs
    likes: 0,
  }
  this.addLike = this.addLike.bind(this);
}
addLike(){
this.setState((state,props) =>({ // parens first because if I started with curly brackets it wouldnt actually give me an object
  likes: state.likes + 1
}));
}

render(){
  return <button onClick={this.addLike}>{this.state.likes}{this.state.likes === 1 ? ' like' : ' likes'}</button> // curly brackets because we are using javascript
}
}

export default App;
