import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={classes.container}>
      <NavLink
        className={({ isActive }) =>
          !isActive ? classes.link : `${classes.link} ${classes.active}`
        }
        to="/CreateTeam"
      >
        Create Team
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          !isActive ? classes.link : `${classes.link} ${classes.active}`
        }
        to="/Attacks"
      >
        Create Attacks
      </NavLink>
    </div>
  );
}

export default Navbar;
