import NavItem from "./NavItem";

function Navbar() {
  return (
    <div className=" fixed flex px-5 bg-purple-900 w-full h-[60px] justify-between items-center rounded-b-2xl">
      <NavItem to="CreateTeam">Create Team</NavItem>
      <NavItem to="Attacks">Create Attacks</NavItem>
    </div>
  );
}

export default Navbar;
