import { useEffect, useState } from "react";
import data from "../json/main.json";
import { Link } from "react-router-dom";

const RecentPosts = () => {
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    let startCountFrom = 0;
    const recentData = [];
    data.length < 3 ? (startCountFrom = 0) : (startCountFrom = data.length - 3);

    for (let i = startCountFrom; i < data.length; i++) {
      recentData.push(data[i]);
    }
    setRecentPosts(recentData.reverse());
  }, []);

  return (
    <>
      <div className="border min-h-[300px] py-2 px-1">
        <div className="bg-black h-full text-white">
          {console.log(recentPosts)}
          {recentPosts &&
            recentPosts?.map(({ title, description, fileName,date }) => {
              return (
                <>
                  <div className="pt-6 px-2">
                    <Link to={`posts/${fileName}`}>
                      <div className="flex justify-between  pb-2">
                        <h5 className="blink">{title}</h5> <small>{date}</small>
                      </div>
                      <p>{description}</p>
                    </Link>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default RecentPosts;
