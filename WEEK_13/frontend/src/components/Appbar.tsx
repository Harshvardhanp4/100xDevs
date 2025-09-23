import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const Appbar = () => {
    return <div className="border-b border-slate-200 flex justify-between px-10 py-4">
        <Link to={'/blogs'}>
            <div className="flex flex-col justify-center cursor-pointer text-2xl font-bold px-4 py-2 ">
                Medium
            </div>
        </Link>
        <div>
            <Avatar size={"big"} name="harsh"></Avatar>
        </div>
    </div>

}