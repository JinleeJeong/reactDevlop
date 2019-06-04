import React, {Component} from 'react';
// import EventPractice from './Practice/EventPractice';
// import ValidationSample from './Practice/ValidationSample';
import ScrollBox from './Practice/ScrollBox'
class App extends Component {
  render() {
    return (
      <div>
        {/* <EventPractice/>
        <ValidationSample/> */}
        <ScrollBox ref={(ref) => {this.scrollBox = ref}}/>
        <button onClick={() => {this.scrollBox.scrollToBottom()}}>맨 밑</button>
      </div>
    );
  }
  
}

export default App;
