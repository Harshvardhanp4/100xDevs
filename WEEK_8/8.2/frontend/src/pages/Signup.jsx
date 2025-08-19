import { BottomWarning } from "../components/BottomWarning"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import { Button } from "../components/Button"

export const Signup = () =>{
    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"Sign Up"}></Heading>
                <SubHeading label={"Enter your information to create an account"}></SubHeading>
                <InputBox placeholder="Harsh" label={"First Name"}></InputBox>
                <InputBox placeholder="Patil" label={"Last Name"}></InputBox>   
                <InputBox placeholder="harsh@gmail.com" label={"Email"}></InputBox>   
                <InputBox placeholder="password@123" label={"Password"}></InputBox>   
            <div className="pt-4">
                <Button label= {"Sign Up"}></Button>
            </div>
        
            <BottomWarning label={"Already have an account?"} buttonText={"Sign In"} to={"/signin"}></BottomWarning>
            </div>
        </div> 
    </div>
    
}