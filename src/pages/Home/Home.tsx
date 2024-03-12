import { Link } from "react-router-dom";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h1>
          PokeBuilder: Create Your Pokémon Team, Customize Move Sets, and Battle
        </h1>
        <p>Join PokeBuilder and unleash your inner Pokémon trainer today!</p>
        <Link className={classes.start} to="createTeam">
          START
        </Link>
      </div>
    </div>
  );
};

export default Home;
