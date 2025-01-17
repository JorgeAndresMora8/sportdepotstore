import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

export interface ModalProps { 
  show: boolean; 
  setShow: (value:boolean) => void;
}

function DetailModal({ show, setShow }:ModalProps) {

  const navigate = useNavigate(); 


  const handleGoToCart = () => {
    setShow(false);
    navigate('/cart');
  };
  const handleGoToStore = () => {
    setShow(false); 
    navigate('/shoes');
  }

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      {/* <Modal show={show} onHide={handleClose}> */}
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Shoe Added</Modal.Title>
        </Modal.Header>
        <Modal.Body>The Shoe selected is in your cart...</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleGoToCart}>
            Buy Now
          </Button>
          <Button variant="primary" onClick={handleGoToStore}>
            Go Shopping
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DetailModal;