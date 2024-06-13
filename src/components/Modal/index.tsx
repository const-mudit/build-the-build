const Modal = ({ isOpen, onClose, imageSrc }: any) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-icon" onClick={onClose}>&times;</span>
        <img src={imageSrc} alt="Reward Image" />
      </div>
    </div>
  );
};

export default Modal;
