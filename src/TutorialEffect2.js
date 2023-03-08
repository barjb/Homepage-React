import { useEffect, useState, useRef, useReducer } from "react";

export default function Counter() {
    // whenever we update the state react calls our component. each render sees its own counter state value
    // which is constant inside our function
    const [count, setCount] = useState(0);
    const latestCount = useRef(count);
    // Each version “sees” the count value from the render that it “belongs” to:
    useEffect(() => {
        latestCount.current = count;
        setTimeout(() => {
            document.title = `you clicked ${count} times`;
            console.log(`you clicked ${latestCount.current} times.`)
        }, 3000)
    })
    /* EVERY function inside component render including:
    - event handlers,
    - effects,
    - timeouts,
    - api calls
    Captures the props and state of the render call that defined it.
    */

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me!</button>
            <Example props={count} />
            <Greeting name="dan"></Greeting>
            <Timer></Timer>
            <Timer2></Timer2>
            <Timer3></Timer3>
            <Timer4></Timer4>
            <Timer5 step={1}></Timer5>
        </div>
    )
}

function Example(props) {
    const counter = props;
    useEffect(() => {
        setTimeout(() => {
            // console.log(props);
            // exact same
            console.log(counter);
        }, 1000);
    })
}
function Greeting({ name }) {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        document.title = 'hello, ' + name;
    }, [name]);
    // deps, effect will run only again when deps changes
    // leaving deps empty causes skipping useEffect() execution
    return (
        <h1>
            hello {name}
            <button onClick={() => setCounter(counter + 1)}>increment</button>
        </h1>
    )
}
function Timer() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const id = setInterval(() => {
            setCount(count + 1);

        }, 1000)
        return () => clearInterval(id);
    }, [count]);
    // [] deps never reruns useeffect, because its always 0+1
    return <h4>{count}</h4>
}
function Timer2() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setCount(c => c + 1);
        }, 1000)
        return () => clearInterval(id);
    }, []);
    return <h2>{count}</h2>
}
function Timer3() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);
    useEffect(() => {
        const id = setInterval(() => {
            setCount(c => c + step);
        }, 1000)
        return () => clearInterval(id);
    }, [step]);
    return <h2>{count}</h2>
}


function Timer4() {
    const initialstate = {
        count: 0,
        step: 1,
    };
    const [state, dispatch] = useReducer(reducer, initialstate)
    const { step, count } = state;
    function reducer(state, action) {
        const { count, step } = state;
        if (action.type === 'tick') {
            return { count: count + step, step };
        } else if (action.type === 'step') {
            return { count, step: action.step };
        } else {
            throw new Error();
        }
    }
    useEffect(() => {
        const id = setInterval(() => {
            dispatch({ type: 'tick' });
        }, 1000)
        return () => clearInterval(id);
    }, [dispatch]);
    return <h2>{count}</h2>
}
function Timer5({ step }) {
    const [count, dispatch] = useReducer(reducer, 0);
    function reducer(state, action) {
        if (action.type === 'tick') {
            return state + step;
        } else {
            throw new Error();
        }
    }
    useEffect(() => {
        const id = setInterval(() => {
            dispatch({ type: 'tick' });
        }, 1000);
        return () => clearInterval(id);
    }, [dispatch]);
    return <h1>{count}</h1>
}