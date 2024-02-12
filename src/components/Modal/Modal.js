import './Modal.scss';


function Modal({open, children}) {
  
  if (!open) return null

  return (
    <div className="delete-modal--overlay"> 
    <div className="delete-modal">
      {children}
    </div>
    </div>

    
  );
}



export default Modal;
