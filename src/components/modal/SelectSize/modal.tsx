import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export interface ModalProps { 
  show: boolean; 
  setShow: (value:boolean) => void;
}

function AlertModal({ show, setShow }:ModalProps) {



  const handleSelectSize = () => {
    setShow(false);
  };
  

  return (
      <Modal show={show}>
        <Modal.Header closeButton onClick={handleSelectSize}>
          <Modal.Title>Size</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please you need to select a size...</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleSelectSize}>
            Select A Size
          </Button>
        </Modal.Footer>
      </Modal>
  );
}

export default AlertModal;