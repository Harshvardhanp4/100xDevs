import { Auth } from "../components/Auth"
import { Quote } from "../components/Quotes"


export const Signup = () => {
    return <div>
        <div className="grid grid-cols-2">
            <div>
                <Auth type="signup"></Auth>
            </div>
            <div className="invisible lg:visible">
                <Quote></Quote>
            </div>

        </div>
    </div>
}  