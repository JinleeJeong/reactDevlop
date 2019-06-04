import React, { Component } from 'react';
import Palette from '../Palette'
import { changeColor } from '../store/module/counter';
import {connect} from 'react-redux'
class PaletteContainer extends Component {

    handleSelect = color => { // Palette에서 받은 props을 가지고, Redux Store 갱신
        const {changeColor} = this.props;
        console.log("ChangeColor");
        changeColor(color); // 함수 호출 >> 아래를 위한 매개변수 사용
    }

    render() {
        const {color} = this.props;
        return (
            <Palette onSelect={this.handleSelect} selected={color}/>
        );
    }
}

const mapStateToProps = state => ({
    color : state.counter.color // store Get!!
})
const mapDispatchToProps = dispatch => ({ // store Update!!
    changeColor : color => dispatch(changeColor(color)) // 함수 호출과 dispatch로 연동
})

export default connect(mapStateToProps, mapDispatchToProps)(PaletteContainer);