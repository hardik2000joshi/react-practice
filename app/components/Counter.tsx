"use client";
import { Butterfly_Kids } from "next/font/google";
import { useState } from "react";


function Counter(){
    const [name, setName] = useState("Robin Wieurch");  
    const [hooks, sethooks ]= useState("Welcome to hooks class");
    const [total, setTotal] = useState(5);
        return(
        <div className="p-6 space y-6">
                <div>
            <p>
                His name is {name}
            </p>
            </div>
            <br />
            <div>
                <div>
            <button onClick={() => setName(name + "author of The Road to React")} className="px-2 py-4 bg-blue-600 text-white rounded-2xl hover:bg-blue-600 transition duration-300">
                Show Author Name and his work
            </button>
            </div>
            </div>  
             <div className="p-6 space y-6">
                <p className="p-6 bg-green-700 items-center">
                    Counter clicked 2 times: {hooks}
                </p>
                </div>
                <div>
                <button onClick={() => sethooks("Use Effect hook")} className="px-2 py-4 bg-red-500 text-white rounded-2xl hover:bg-red-500 transition duration-300">
                    Click on this counter
                </button>
            </div>

            <div className="p-6 space y-6">
                <p className="p-6 bg-yellow-500 items-center">
                    Total amount is: {total}
                </p>
            </div>

            <div className="p-6 space y-6">
                <button onClick={() => setTotal(total+5)} className="px-2 px-4 bg-orange-500 text-white rounded-2xl hover:bg-orange-500 transition duration-300 items-center">
                    Click Button
                </button>
            </div>
        </div>
        )
    }    
        export default Counter;