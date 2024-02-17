import { useState, useEffect } from "react";
import data from "../json/main.json";
import { Link } from "react-router-dom";

const Categories = () => {
  const [useCategories, setUseCategories] = useState({});

  useEffect(() => {
    let categoryCounts = {};
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].category.length; j++) {
        let category = data[i].category[j];
        if (categoryCounts[category]) {
          categoryCounts[category]++;
        } else {
          categoryCounts[category] = 1;
        }
      }
    }
    setUseCategories(categoryCounts);
  }, []);

  return (
    <>
      <div className="border h-auto text-[#bbbbbb]">
        <ul className="p-5">
          <Link to={"./categories"}>
            <li className="py-3 flex justify-between">
              <span> All Posts </span> <span>({data.length})</span>{" "}
            </li>
          </Link>
          {Object.keys(useCategories).map((c) => {
            return (
              <Link to={`./categories/${c}`}>
                <li className="py-3 flex justify-between">
                  <span>{c}</span> <span>({useCategories[c]})</span>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Categories;
