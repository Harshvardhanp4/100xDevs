

import { PrismaClient } from "@prisma/client";



const client = new PrismaClient();




async function fetchData() {

     const user = await client.user.findFirst();

    return ({
    email: user?.email,
    name: "Harsh"
    
})

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