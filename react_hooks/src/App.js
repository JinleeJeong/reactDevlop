import * as React from 'react';
function App() {

  const [date, setDate] = React.useState(new Date());
  const intervelRef = React.useRef();
  const [count, setCount] = React.useState(0);
  const prevDocumentTitle = React.useRef(document.title)
  const input = React.useRef(null); 
  const handleReset = () => {
    input.current.value = "";
  };
  /* 
    Obj={ current : "React App"} current는 고정 (parameter)
    input에 Ref 즉, 아래 input ref을 DOM으로 접근 Reset시 ""로 초기화
  */

  React.useEffect(() => { // ComponentDidMount ==> render 실행하면 함께 실행
    console.log("Rendering")

    startTimer();
    
    document.title = `Click count = ${count}`;
    return () => { // componentWillUnmount DidMount 생성한 DOM 등을 해제 & 복원 5 Line
      document.title = prevDocumentTitle;
      return stopTimer;
    };
  }, [count]); // 해당 count 값이 변경될 때만 render!!

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };
  const decrementCount = () => {
    setCount(prevDisCount => prevDisCount - 1);
  }

  function startTimer() {
    if (intervelRef.current) {
      return;
    }
    intervelRef.current = setInterval(() => {
      setDate(new Date());
    }, 1000); // 1초마다 반복
  }

  function stopTimer() {
    clearInterval(intervelRef.current);
    intervelRef.current = null; 
    // null 처리를 통해 startTimer을 다시 호출했을 때, 진행 가능하게 함!
  }


  return (
    <div>
      <div>
        <input type ="text" ref={input}/>
        <button type="button" onClick={handleReset}>reset</button>
        <p>Count time : {count}</p>
        <button onClick={incrementCount}>increment count</button>
        <button onClick={decrementCount}>decrement count</button>
      </div>
      <div style={{marginTop: "5vh"}}>
        <time>{date.toString()}</time>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
      </div>
    </div>
  );
}


export default App;
