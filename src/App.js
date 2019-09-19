import React, {Component} from 'react';
import First from './components/First';
import Second from './components/Second';
import Last from './components/Last';

class App extends Component {
  render(){
    return(
      <div>
        <First/>
        <br />
        <Second/>
        <br/>
 				<Last/> 
      </div>
    );
  }
}

export default App;