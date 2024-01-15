const Modal = ({ children }) => {
  return (
    <dialog className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
      {children}
    </dialog>
  );
};
export default Modal;
