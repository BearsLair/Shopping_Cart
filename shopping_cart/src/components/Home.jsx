import { Link } from "react-router";

const Home = () => {
  return (
    <>
      <h1 className="text-5xl">This is the Home Page!</h1>
      <Link to="/products">Click here to view products</Link>
    </>
  );
};

export default Home;
