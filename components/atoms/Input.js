import PropTypes from "prop-types";
const Input = ({ id, label, ...props }) => {
  return (
    <>
      <label
        htmlFor={id}
        className="form-label text-lg fw-medium color-palette-1 mb-10"
      >
        {label}
      </label>
      <input
        className="form-control rounded-pill text-lg"
        id={id}
        aria-describedby="name"
        {...props}
      />
    </>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
};

export default Input;
