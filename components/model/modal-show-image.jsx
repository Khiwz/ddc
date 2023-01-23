import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  // height: "90%",
  outline: "none",
  bgcolor: "white",
  //   boxShadow: 24,
};

export default function ModalImage({ openModal, handleCloseModal, image }) {
  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img src={image} alt="" className="object-contain w-full h-full" />
        </Box>
      </Modal>
    </div>
  );
}
