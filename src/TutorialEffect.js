import { useState } from "react";

export default function Counter() {
    // whenever we update the state react calls our component. each render sees its own counter state value
    // which is constant inside our function
    const [count, setCount] = useState(0);

    // handlers belong to a particular render, whenever you click it keeps using counter from particular render
    function handleAlertClick() {
        setTimeout(() => {
            alert('you clicked on: ' + count);
        }, 3000);
    }


    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me!</button>
            <button onClick={handleAlertClick}>Show alert</button>
        </div>
    )
}