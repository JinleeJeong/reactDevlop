import React, { Component } from 'react';
import {connect} from 'react-redux'
import Counter from '../Counter';
import {increment, decrement} from "../store/module/counter"

class CounterContainer extends Component {

    handleIncrement = () => {
        this.props.increment(); // 액션 함수 실행 + Reducer 실행
    }
    handleDecrement = () => {
        this.props.decrement(); // 액션 함수 실행 + Reducer 실행
    }
    render() {
        const { color, number } = this.props;
        return (
            <Counter
                color={color}
                value={number}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
            />
        );
    }
}

const mapStateToProps = state => ({
    color : state.counter.color,
    number : state.counter.number
})

const mapDispatchToProps = dispatch => ({
    increment : () => dispatch(increment()),
    decrement : () => dispatch(decrement())
})
    // bindActionCreators({
    //     increment,
    //     decrement
    // }, dispatch
    // );
export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);