import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

function Github() {
  // Best approcah to avoid lag while click/refresh
  const data = useLoaderData();

  /*
Alternate way to fetch the data from api and use the data


    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/tm-web-dev')
        .then(res => res.json())
        .then(data => {
            setData(data)
        })
    },
     [])
*/
  return (
    <>
      <div className="text-center bg-gray-600 text-white p-4 text-3xl m-4 ">
        Github Followers: {data.followers}
      </div>
      <div className="text-center bg-gray-600 text-white p-4 text-3xl m-4 ">
        Github Name: {data.name}
      </div>
      <div className="text-center bg-gray-600 text-white p-4 text-3xl m-4 ">
        Github Url: {data.html_url}
      </div>
      <div className="flex justify-center">
        <img src={data.avatar_url} alt="Github pic" width={300} height={300} />
      </div>
    </>
  );
}

export default Github;

// Functon to get data promise and returing as a promise
export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/tm-web-dev");
  return response.json();
};
