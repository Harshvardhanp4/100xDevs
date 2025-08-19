import { AppBar } from "../components/Appbar";

export const Dashboard= ()=>{
    return <div>
        <AppBar/>
            <div className="m-8">
                <Balance value={"10,000"}></Balance>
                <Users/>
            </div>
        
    </div>
}