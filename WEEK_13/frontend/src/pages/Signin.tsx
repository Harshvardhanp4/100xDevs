import { Auth } from "../components/Auth"
import { Quote } from "../components/Quotes"


export const Signin = () => {
    return <div>
        <div className="grid grid-cols-2">
            <div>
                <Auth type="signin"></Auth>
            </div>
            <div className="invisible lg:visible">
                <Quote></Quote>
            </div>

        </div>
    </div>
}  