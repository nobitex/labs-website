import React from "react";
import { Link, useParams } from "react-router-dom";
import data from "../json/main.json";
import Layout from "../Components/Layout";

const Category = () => {
  const { categoryName } = useParams();
  return (
    <Layout>
      <div>
        <h1 className="text-3xl text-center my-5 bg-[#00aaaa] text-black  ">
          {!categoryName ? "All posts" : categoryName}
        </h1>
        {data.map(({title,description,date,fileName,category}, id) => {
          // If categoryName is not defined, render all links
          // Otherwise, render only the links that match the category
          if (!categoryName || category.includes(categoryName)) {
            return (
              <div className="border p-3 my-2 text-black md:mx-48 mx-3 lg">
                <div className="bg-[#bbbbbb]">
                  <Link key={id} to={`../posts/${fileName}`}>
                    <div className="flex justify-between items-center px-4 py-2">
                      {" "}
                      <h3 className=" text-2xl">{title}</h3> <p> {date}</p>
                    </div>
                    <p className=" py-2 pl-4">{description}</p>
                  </Link>
                </div>
              </div>
            );
          }
        })}
      </div>
    </Layout>
  );
};

export default Category;
