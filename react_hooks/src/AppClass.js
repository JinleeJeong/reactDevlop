import * as React from 'react';

class AppClass extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
        counts : 1
        }
    }

    // componentDidMount() {
        
    //     this.prevDocumentTitle = document.title;
    //     document.title = `Click count = ${this.state.count}`;
    // }
    // componentDidUpdate() {

    //     document.title = `Click count = ${this.state.count}`;
    // }
    // componentWillUnmount() {

    //     document.title = this.prevDocumentTitle;
    // }

    incrementCount = () => {
        this.setState(prevState => ({ counts: prevState.counts + 1 }));
    };

    decrementCount = () => {
        this.setState(prevState => ({ counts: prevState.counts - 1 }));
    };

    render() {
        return (
        <div>
            <p>Count time : {this.state.counts}</p>
            <button onClick={this.incrementCount}>increment count</button>
            <button onClick={this.decrementCount}>decrement count</button>
        </div>
        )
    }
}
export default AppClass;