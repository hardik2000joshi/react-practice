"use client";
import { ReactNode, useState } from "react"
export function Tab({children}: {children: ReactNode}) {
    const [companyName, setCompanyName] = useState("");
    const [registrationNumber, setRegistrationNumber] = useState("");
return(
    <div>
        <div className="flex flex-col">
            {children}
        </div>

        <div>
            <h3 className="text-xl font-semibold mb-4">
                Add New Company
            </h3>

            <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col">
                    <label >
                        Company Name
                    </label>
                    <input type="text" 
                    className="border p-2 rounded-lg w-full"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    />
                </div>

                <div className="flex flex-col">
                    <label>
                        Registration Number
                    </label>
                    <input 
                    type="text" 
                    className="border p-2 rounded-lg w-full"
                    value={registrationNumber}
                    onChange={(e) => setRegistrationNumber(e.target.value)}
                    />
                </div>
            </div>
        </div>
    </div>   
)
    }
