import pokeball from "../../assets/white-pokeball.png";
import classes from "./Team.module.css";

function Team() {
  return (
    <div className={classes.team}>
      <div className={classes.header}>
        <img className={classes.pokeballImg} src={pokeball} />
        <h2 className={classes.headerText}>Current Party</h2>
      </div>
      <div className={classes.teamTileContainer}>{}</div>
    </div>
  );
}

export default Team;
