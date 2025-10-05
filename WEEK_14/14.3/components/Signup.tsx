"use client"
import { useState } from "react"

import { signup } from "@/app/actions/user";

export function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return <div className="flex flex-col justify-center justify-center h-screen">
        <div className="flex justify-center">
            <div className="border-b-black">
                <input onChange={(e) => {
                    setEmail(e.target.value)
                }} className="p-2 m-2" type="text" placeholder="username" />
                <br />
                <input onChange={(e)=>{
                    setPassword(e.target.value)
                }} className="p-2 m-2" type="password" placeholder="password" />
                <br />
                <div className="mt-4 flex justify-center">
                    <button onClick={()=>{
                        signup(email, password);
                
                    }}>Signup</button>
                </div>
            </div>
        </div>
    </div>
}