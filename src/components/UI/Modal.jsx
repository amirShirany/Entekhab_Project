import PropTypes from "prop-types"
import "./Modal.css" // Assuming you have a CSS file for styling

const Modal = ({ isOpen, onClose, children }) => {
  console.log("Modal isOpen:", isOpen)
  console.log("Modal onClose:", onClose)

  if (!isOpen) return null

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
}

export default Modal
