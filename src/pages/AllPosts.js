import React from "react";
import { Link } from "react-router-dom";
import data from "../json/main.json";
import Layout from "../Components/Layout";

const AllPosts = () => {
  return (
    <Layout>
      <h1 className="text-3xl text-center my-5 bg-[#00aaaa] text-black  ">
        All Works
      </h1>
      {data.map(({title,date,description,fileName}, id) => {
        return (
          <div className="border p-3 my-2 text-black md:mx-48 mx-3">
          <div className="bg-[#bbbbbb]">
            <Link key={id} to={`./${fileName}`}>
              <div className="flex justify-between items-center px-4 py-2">
                <h3 className=" text-2xl">{title}</h3> <p> {date}</p>
              </div>
              <p className=" py-2 pl-4">{description}</p>
            </Link>
          </div>
        </div>
        );
      })}
    </Layout>
  );
};

export default AllPosts;
