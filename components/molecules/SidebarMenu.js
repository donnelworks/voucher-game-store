import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import { OverviewSvg } from "../atoms/svg";

const SidebarMenu = ({ active, icon, title, link }) => {
  const classActive = active ? "item active mb-30" : "item mb-30";
  return (
    <div className={classActive}>
      <div className="me-3">
        <Image src={icon} width={25} height={25} />
      </div>
      {/* <OverviewSvg /> */}
      <p className="item-title m-0">
        <Link href={link}>
          <a className="text-lg text-decoration-none">{title}</a>
        </Link>
      </p>
    </div>
  );
};

SidebarMenu.propTypes = {
  active: PropTypes.bool,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default SidebarMenu;
