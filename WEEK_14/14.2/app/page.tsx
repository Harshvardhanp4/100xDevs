import axios from "axios";

async function getUserDetails() {
  await new Promise((r) => setTimeout(r, 3000))
  const response = await axios.get("http://localhost:5000/users/1");
  return response.data;

}


// asynchronus component on top
export default async function Home() {
  const userDetails = await getUserDetails();
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>
            Name: {userDetails.name}
          </div>
          Email: {userDetails.email}


        </div>

      </div>

    </div>
  );
}


