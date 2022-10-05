import React from "react";
import { SidebarFooter, SidebarMenu, SidebarUser } from "../molecules";
import PropTypes from "prop-types";

const Sidebar = ({ menu }) => {
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <SidebarUser />
        <div className="menus">
          <SidebarMenu
            active={menu === "overview"}
            icon="/icon/overview.svg"
            title="Overview"
            link="/member"
          />
          <SidebarMenu
            active={menu === "transaction"}
            icon="/icon/transaction.svg"
            title="Transactions"
            link="/member/transactions"
          />
          <SidebarMenu
            icon="/icon/message.svg"
            title="Messages"
            link="/member"
          />
          <SidebarMenu icon="/icon/card.svg" title="Card" link="/member" />
          <SidebarMenu icon="/icon/reward.svg" title="Rewards" link="/member" />
          <SidebarMenu
            active={menu === "setting"}
            icon="/icon/setting.svg"
            title="Settings"
            link="/member/edit-profile"
          />
          <SidebarMenu
            icon="/icon/logout.svg"
            title="Log Out"
            link="/sign-in"
          />
        </div>
        <SidebarFooter />
      </div>
    </section>
  );
};

Sidebar.propTypes = {
  menu: PropTypes.string,
};

export default Sidebar;
