import produce from 'immer' // Immutable Library!
// 액션 타입 정의

const CHANGE_COLOR = "counter/CHANGE_COLOR";
const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";


// 액션 생성 함수 정의

export const changeColor = color => ({type: CHANGE_COLOR, color}) // 리듀서에서 action.type, action.color로 접근 가능! > 함수에서 받아오는 값
export const increment = () => ({type : INCREMENT})
export const decrement = () => ({type : DECREMENT})

// 초기상태 정의

const initialState = {
    color : "red",
    number : 0
};
// 리듀서 작성

export default function counter(state = initialState, action) {
    switch (action.type) {
        case CHANGE_COLOR:
            return produce(state, draft => { // we can change value though draft!
                draft.color = action.color;
            });
        case INCREMENT:
            return produce(state, draft => {
                draft.number++;
            })
        case DECREMENT:
            return produce(state, draft => {
                draft.number--;
            })  
        default:
            return state;    
    }
}

