import { NavLink } from "../atoms";

const NavMenu = () => {
  return (
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
        <NavLink href="/" title="Home" active />
        <NavLink href="/games" title="Games" />
        <NavLink href="/rewards" title="Rewards" />
        <NavLink href="/discover" title="Discover" />
        <NavLink href="/global-rank" title="Global Rank" />
      </ul>
    </div>
  );
};

export default NavMenu;
