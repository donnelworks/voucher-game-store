import React from "react";
import PropTypes from "prop-types";

const ReachedItem = ({ value, desc }) => {
  return (
    <>
      <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">
        {value}
      </p>
      <p className="text-lg text-lg-start text-center color-palette-2 m-0">
        {desc}
      </p>
    </>
  );
};

ReachedItem.propTypes = {
  value: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default ReachedItem;
