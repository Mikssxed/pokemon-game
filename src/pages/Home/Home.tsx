import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex justify-center mt-10">
      <div className="py-7 px-4 border-4 border-white rounded-2xl bg-black bg-opacity-30 w-4/5 text-white h-auto">
        <h1 className="text-center text-2xl mb-8 font-semibold">
          PokeBuilder: Create Your Pokémon Team, Customize Move Sets, and Battle
        </h1>
        <p className=" mb-8 text-base text-center">
          Join PokeBuilder and unleash your inner Pokémon trainer today!
        </p>
        <Button onClick={() => navigate("createteam")}>START</Button>
      </div>
    </div>
  );
};

export default Home;
