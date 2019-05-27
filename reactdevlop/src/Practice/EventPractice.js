import React, { Component } from 'react';

class EventPractice extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            message : "",
            name : "",
        }
    }
    // Arrow Function을 이용하면, bind로 묶을 필요 X
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value // e.target.name으로 input Tag의 name을 가져오고, value를 가져옴 배열은 Key의 역할!
        })
    }
    handleClick = (e) => {
        alert(this.state.name + ': ' + this.state.message);
        this.setState({
            name : "",
            message : ""
        })
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            this.handleClick();
        }
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input type="text" name="name" placeholder = "Input" value={this.state.name} onChange ={this.handleChange}/>
                <input type="text" name="message" placeholder = "Input" value={this.state.message} onChange ={this.handleChange} onKeyPress={this.handleKeyPress}/>
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}

export default EventPractice;