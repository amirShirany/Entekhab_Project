import PropTypes from "prop-types"

function Button({ onClick, children, className }) {
  return (
    <button onClick={onClick} className={`btn ${className}`}>
      {children}
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default Button
