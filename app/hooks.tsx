// hooks: Hooks are the way to utilize functionalities and features provided by the react
// Use state hook is a feature that allows to add state variables to functional components

"use client";
import { useState } from "react";

function Count() {
    const [count, setCount] = useState(2);
    const [age, setAge] = useState(22);

    return (
        <div className="p-6 space y-6">
            <div>
            <p>
                you clicked {count} times
            </p>
            <button onClick={() => setCount(count+1)} className="px-6 py-2 bg-blue-500 text-white rounded-2xl hover:bg-blue-600 transition duration-300">
                Click Count Button  
            </button>
            </div>

            <div>
            <p>
                Age is {age}
            </p>
            <button onClick={() => setAge(age+2)} className="px-6 py-2 bg-orange-500 text-white rounded-2xl hover:bg-orange-600 transition duration-300">
                Button for clicking age
            </button>
            </div>
        </div>
    )
}
export default Count;
