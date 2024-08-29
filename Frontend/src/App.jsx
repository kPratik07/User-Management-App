import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";
import ExportButton from "./components/ExportButton";
import DeleteConfirmation from "./components/DeleteConfirmation";
import "./styles.css";

function App() {
  const [showUserForm, setShowUserForm] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  return (
    <div className="app-container">
      <h1>User Management System</h1>
      <button onClick={() => setShowUserForm(true)} className="sign-up-button">
        SIGN UP
      </button>
      <ExportButton />
      <UserTable
        onDelete={(user) => {
          setUserToDelete(user);
          setShowDeleteConfirm(true);
        }}
      />
      {showUserForm && <UserForm onClose={() => setShowUserForm(false)} />}
      {showDeleteConfirm && (
        <DeleteConfirmation
          user={userToDelete}
          onConfirm={() => setShowDeleteConfirm(false)}
          onCancel={() => setShowDeleteConfirm(false)}
        />
      )}
    </div>
  );
}

export default App;
