import React, { useState, useEffect } from "react";
import { getUsers, addUser, deleteUser } from "../services/api";
import UserTable from "./UserTable";
import UserForm from "./UserForm";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userData = await getUsers();
        setUsers(userData);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleAddUser = async (user) => {
    try {
      await addUser(user);
      const userData = await getUsers(); // Refresh user list
      setUsers(userData);
      setIsFormOpen(false);
    } catch (error) {
      console.error("Failed to add user:", error);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await deleteUser(userId);
      const userData = await getUsers(); // Refresh user list
      setUsers(userData);
    } catch (error) {
      console.error("Failed to delete user:", error);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="user-list-container">
      <button onClick={() => setIsFormOpen(true)}>SIGN UP</button>
      {isFormOpen && (
        <UserForm
          onClose={() => setIsFormOpen(false)}
          onAddUser={handleAddUser}
        />
      )}
      <UserTable users={users} onDeleteUser={handleDeleteUser} />
    </div>
  );
};

export default UserList;
