import React from "react";
import { Modal } from "antd";
import ModalContent from "../add-city-modal-content";

const AddCityModal = (props) => {
  const { isModalOpen, setIsModalOpen } = props;

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Modal
      title="Add City"
      className="add-city-modal"
      bodyStyle={{ overflowY: "auto", maxHeight: "calc(90vh - 220px)" }}
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
    >
      <ModalContent />
    </Modal>
  );
};

export default AddCityModal;
