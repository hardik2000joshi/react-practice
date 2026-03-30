"use client";
import { useEffect, useState } from "react";

function UseEffect() {     
    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(1);
    // first -> side-effect function
    // second -> clean-up function

    // variation:1 runs on every render
    useEffect(() => {     // Use Effect used for side effects on page
        // whenever UI render this logic will run
        alert("Use Effect will run on each render");
    })

    // Variation: 2 runs on only first render
    /*useEffect(() => {
        alert("Use Effect runs on only 1st render");
    })*/

    // Variation:3 runs every time when count is updated
    useEffect(() => {
        alert("Use Effect will run every time when count is updated")
    }, [count])

    function handleClick() {
        setCount(count+1);
    }
    
    function handleTotal() {
        setTotal(total+2);
    }

    return(
        <div>
            <div>
                <p>
                    Use Effect Clicked {count} times
                </p>
            </div>
            <div>
            <button onClick={handleClick} className="px-2 px-4 bg-orange-500 text-white rounded-2xl hover:bg-orange-500 transition duration-300 items-center">
                 Hello Next hook- useEffect
            </button>
            <br />
            Number of Count is: {count}
            </div>

            <div>
                <p>
                    Total Amount is {total}
                </p>
            </div>

            <div>
                <button onClick={handleTotal} className="px-2 px-6 bg-green-500 text-white rounded-2xl hover:bg-red-500 transition duration-300 items-center">
                    Hello we created total using use Effect hook
                </button>
                <br />
                Total number of items is {total}
            </div>
        </div>
    )
}

export default UseEffect;