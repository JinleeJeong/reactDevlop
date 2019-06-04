import React, { Component } from 'react';
import WaitingActions from '../WaitingList'
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import {changeInput, create, enter, leave} from "../store/module/waiting"

class WaitingListContainer extends Component {

      // 인풋 변경 이벤트 글자를 쓸때마다!!! reducer에 업데이트
    handleChange = e => {
        const {changeInput} = this.props;
        changeInput(e.target.value);
    };
    // 등록 이벤트
    handleSubmit = e => {
        e.preventDefault();
        const { input, changeInput, create } = this.props;
        create(input); // 등록 create할때마다 그 객체의 id값 자동 증가! > store에 정의
        changeInput(""); // 인풋 값 초기화
    };
    // 입장 
    handleEnter = id => {
        const { enter } = this.props;
        console.log('id', id);
        enter(id);
    };
    // 나가기
    handleLeave = id => {
        const { leave } = this.props;
        leave(id);
    };
    /* ===============================입장 && 나가기의 id값 =
    WaitingList.js에 map 키 값으로 정의되어 각 행의 id값이 정의*/
    render() {
        const {input, list} = this.props;
        return (
            <WaitingActions 

                input={input}
                waitingList={list}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                onEnter={this.handleEnter}
                onLeave={this.handleLeave}
        
            />
        );
    }
}

const mapStateToProps = state => ({ // store Get!!
    input: state.waiting.input,
    list: state.waiting.list
  });
  
  // 이런 구조로 하면 나중에 다양한 리덕스 모듈을 적용해야 하는 상황에서 유용합니다.
  // x : () => x(x()) 이런 구조로 여러가지를 해야 하지만, 하나로 사용 가능!
  const mapDispatchToProps = dispatch => ({
    changeInput : (e) => dispatch(changeInput(e)),
    create : (input) => dispatch(create(input)),
    enter : (id) => dispatch(enter(id)),
    leave : (id) => dispatch(leave(id))
    // WaitingActions: bindActionCreators(waitingActions, dispatch)
    // AnotherActions: bindActionCreators(anotherActions, dispatch)
  });
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(WaitingListContainer);
  