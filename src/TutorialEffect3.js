import { useEffect, useState } from "react";

export default function Counter() {
    // whenever we update the state react calls our component. each render sees its own counter state value
    // which is constant inside our function
    const [count, setCount] = useState(0);

    // Each version “sees” the count value from the render that it “belongs” to:
    useEffect(() => {
        setTimeout(() => {
            document.title = `you clicked ${count} times`;
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
        </div>
    )
}
