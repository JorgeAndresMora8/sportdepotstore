import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export interface ModalProps {
  show: boolean;
  setShow: (value: boolean) => void;
  productName: string; 
  sendMessage: ({ message, rating, title }:any) => void;
}

function ReviewModal({ show, setShow, productName, sendMessage }: ModalProps) {

  const [rating, setRating] = useState<number>(1)
  const [message, setMessage] = useState<string>('')
  const [title, setTitle] = useState<string>('')

  const handleSubmit = () => {
    console.log(rating, message)
    sendMessage({ message, rating, title })
    setShow(false);
  };

  return (
      
      <Modal show={show}>
        <Modal.Header closeButton onClick={() => setShow(false)}>
          <Modal.Title>Review for the {productName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            style={{
              width: "100%",
              height: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              padding: "0px 2rem",
            }}
          >
            <div
              style={{
                borderRadius: "1rem",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                padding: "1rem",
                border: "1px solid lightgray",
                width: "10rem",
              }}
            >
              <label style={{ fontWeight: "600" }}>Rating</label>
              <select
              value={rating}
              onChange={((e) => setRating(Number(e.target.value)))}
                style={{
                  padding: "5px 0.5rem",
                  borderRadius: "0.5rem",
                  border: "none",
                  outline: "none",
                  boxShadow: "1px 2px 2px rgba(0,0,0,0.2)",
                }}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div
              style={{
                gap: "6px",
                display: "flex",
                width: "100%",
                justifyContent: "center",
                alignItems: "start",
                flexDirection: "column",
                padding: "1rem 0px",
              }}
            >
              <label style={{ fontWeight: "600" }}>Title</label>
              <input
              style={{width:'100%', padding:"0.5rem 1rem", borderRadius:'0.5rem', border:'1px solid lightblue'}}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
                placeholder="left your message"
                name=""
                id=""
              ></input>
              <label style={{ fontWeight: "600" }}>Message</label>
              <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
                style={{
                  padding: "1rem",
                  resize: "none",
                  outline: "1px solid lightblue",
                  height: "200px",
                  width: "100%",
                  border: "1px solid lightgray",
                  borderRadius: "1rem",
                }}
                placeholder="left your message"
                name=""
                id=""
              ></textarea>
            </div>
          </form>
          <span
            style={{ fontWeight: "300", fontSize: "0.8rem", color: "#7E99A3" }}
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            Your review will be visible to all app users.
          </span>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleSubmit}>
            Save and upload
          </Button>
        </Modal.Footer>
      </Modal>
  );
}

export default ReviewModal;
