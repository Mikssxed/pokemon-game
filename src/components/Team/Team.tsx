import { FC } from "react";
import pokeball from "../../assets/white-pokeball.png";
import classes from "./Team.module.css";

type Team = {
  open: boolean;
  toggleTeam: () => void;
};

const Team: FC<Team> = ({ open, toggleTeam }) => {
  return (
    <div className={classes.team}>
      <div className={classes.header}>
        <img className={classes.pokeballImg} src={pokeball} />
        <h2 className={classes.headerText}>Current Party</h2>
      </div>
      <div className={classes.teamTileContainer}>{}</div>
      <div onClick={toggleTeam} className={classes.openTeam}>
        {open ? "Hide" : "Show"}
      </div>
    </div>
  );
};

export default Team;
