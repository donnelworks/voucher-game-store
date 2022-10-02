import Image from "next/image";
import React from "react";
import { NavItem, NavAuth, NavToggle } from "../molecules";

const NavBar = () => {
  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <Image src="/logo/logo.svg" width={60} height={60} />
          </a>

          <NavToggle />

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
              <NavItem href="/" title="Home" active />
              <NavItem href="/games" title="Games" />
              <NavItem href="/rewards" title="Rewards" />
              <NavItem href="/discover" title="Discover" />
              <NavItem href="/global-rank" title="Global Rank" />
              <NavAuth isLogin />
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default NavBar;
