import produce from 'immer' // Immutable Library!
// 액션 타입 정의

const CHANGE_INPUT = "waiting/CHANGE_INPUT";
const CREATE = "waiting/CREATE";
const ENTER = "waiting/ENTER";
const LEAVE = "waiting/LEAVE";

let id = 3; // index value

export const changeInput = text => ({type : CHANGE_INPUT, payload : text});
export const create = text => ({type : CREATE, payload : {text, id : id++}});
export const enter = id => ({type : ENTER, payload : id});
export const leave = id => ({type : LEAVE, payload : id})

const initialState = {
    input : "",
    list: [
        {
          id: 0,
          name: "홍길동",
          entered: true
        },
        {
          id: 1,
          name: "콩쥐",
          entered: false
        },
        {
          id: 2,
          name: "팥쥐",
          entered: false
        }
    ]
};

export default function waiting(state = initialState, action) {
    switch (action.type){
        case CHANGE_INPUT:
            return produce(state, draft => {
                draft.input = action.payload
            })
        case CREATE:
            return produce(state, draft => {
                draft.list.push({
                    id : action.payload.id,
                    name : action.payload.text,
                    entered : false
                })
            })
        case ENTER: // 같은 id 값에 대한 entered 값을 전환
            return produce(state, draft => {
                const item = draft.list.find(item => item.id === action.payload);
                item.entered = !item.entered; 
            });

        case LEAVE: // 다른 id 값에 대한 것을 filtering
            return produce(state, draft => {
                const list = draft.list.filter(item => item.id !== action.payload);
                console.log(list);
                draft.list = list;
            });
        default:
            return {
                ...state
            }
    }
}