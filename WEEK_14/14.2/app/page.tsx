import axios from "axios";

async function getUserDetails() {
  await new Promise((r) => setTimeout(r, 3000))
  const response = await axios.get("http://localhost:3000/api/user");
  return response.data;

}


// asynchronus component on top
export default async function Home() {
  const userDetails = await getUserDetails() || { name: "n/a", username: "n/a" };
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>
            Name: {userDetails.name}
          </div>
          Username: {userDetails.email}


        </div>

      </div>

    </div>
  );
}


