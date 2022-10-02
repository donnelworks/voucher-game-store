import LayoutScripts from "./LayoutScripts";
import LayoutHead from "./LayoutHead";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <>
      <LayoutHead />
      {children}
      <LayoutScripts />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
