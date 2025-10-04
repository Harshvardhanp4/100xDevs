"use client"
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export function SignupForm() {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();


    const signupHandler = async () => {
        const response = await axios.post("http://localhost:3000/api/user", {
            name,
            username,
            password
        });

        console.log("Signup Successful!", response.data);
        router.push("/");
    }

    return (
        <div>
            <LabelledInput label="name" placeholder="Name" value={name} onChange={setName} />
            <LabelledInput label="username" placeholder="Username" value={username} onChange={setUsername} />
            <LabelledInput label="password" placeholder="Password" value={password} onChange={setPassword} />
            <button onClick={signupHandler} className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">SignUp</button>
        </div >
    )
}

interface LabelledInputProps {
    label: string,
    placeholder: string,
    value: string,
    onChange: (value: string) => void;

}

function LabelledInput({ label, placeholder, value, onChange }: LabelledInputProps) {
    return (
        <div>
            <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
            <input
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder={placeholder}
                required
            />
        </div>
    );
}