"use client";

import { useState } from "react";

const UseState = () => {
    const [state, setState] = useState(1);  // state- state variable useState(1) - initial state
    return(
        <div className="p-6 space y-6">
            <p className="px-6 py-2 bg-indigo-700 text-white items-center">
                you have clicked {state} time
            </p>
            <div className="p-6 space y-6">
                <div>
            <button onClick={()=> {setState(state + 4)}} className="px-2 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-500 transition duration-300">
                Click button
            </button>
            </div>
        </div>
        </div>
    )
}
export default UseState;