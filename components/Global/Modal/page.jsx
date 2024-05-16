const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center bg-green-50">
            <div className="bg-white p-4 rounded shadow-lg relative">
                <button className="absolute top-2 right-2 text-green-900" onClick={onClose}>Close</button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
