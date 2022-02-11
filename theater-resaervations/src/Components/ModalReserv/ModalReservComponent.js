import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

function ModalReservComponent({
  titulo,
  descripcion,
  isOpen,
  onClose,
  footerButtonText,
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{titulo}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{descripcion}</ModalBody>

        <ModalFooter>
          <Button colorScheme="orange" mr={3} onClick={onClose}>
            {footerButtonText}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
export default ModalReservComponent;
