
import axios from "axios";


async function fetchData() {
    const res = await axios.get("http://localhost:5000/users/1")
    console.log("response is: " + JSON.stringify(res.data))
    return res.data;

}

export default async function CardComponent() {
    const data = await fetchData();

    return (
        <div>
            {data.name},
            {data.email}
        </div>
    )

}