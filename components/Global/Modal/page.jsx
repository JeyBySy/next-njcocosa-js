const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed w-[95%] m-auto inset-0 rounded flex items-center justify-center bg-[#3d3d3df5]">
            <div className="bg-white p-4 relative">
                <button className="z-10 absolute top-0 right-5" > <span className="text-[3em] cursor-pointer" onClick={onClose}>&times;</span></button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
