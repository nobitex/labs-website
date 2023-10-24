import { Link,useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const navigate = useNavigate()
  return (
    <>
      <div className="h-4 bg-[#bbbbbb]">
        <div className="md:mx-48 mx-3">
          <div onClick={()=>{navigate('/')}} className="underline inline-block text-black hover:bg-black hover:text-white" To="/">
            Nobitex Labs
          </div>
          <div onClick={()=>{navigate('/posts')}} className="underline ml-2 inline-block text-black hover:bg-black hover:text-white" To="/">
            All Works
          </div>
        </div>
      </div>
      <div>{children}</div>
      <p className="text-center my-5">© 2023 Nobitex</p>
    </>
  );
};

export default Layout;
