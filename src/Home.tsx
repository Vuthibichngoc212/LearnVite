import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();
    function handleClick() {
      navigate("/product");
    }
    return (
      <div>
        <button onClick={handleClick}>Go to Product</button>
      </div>
    );
  };
  
  export default Home;
  