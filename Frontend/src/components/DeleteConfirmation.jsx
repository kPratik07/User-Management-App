import React from "react";
import { deleteUser } from "../services/api";

const DeleteConfirmation = ({ user, onConfirm, onCancel }) => {
  const handleConfirm = async () => {
    try {
      await deleteUser(user._id);
      alert("User deleted successfully");
      onConfirm();
    } catch (error) {
      console.error("Failed to delete user:", error);
      alert("Failed to delete user");
    }
  };

  return (
    <div className="delete-confirmation">
      <p>
        Are you sure you want to delete {user.firstName} {user.lastName}?
      </p>
      <button onClick={handleConfirm}>DELETE</button>
      <button onClick={onCancel}>CANCEL</button>
    </div>
  );
};

export default DeleteConfirmation;
