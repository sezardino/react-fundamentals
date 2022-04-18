import { useEffect, useMemo } from "react";
import { useActions, useTypedSelector } from "../../store/hooks";

const Users = () => {
  const { error, loading, users } = useTypedSelector((state) => state.users);
  const { fetchUsers } = useActions();

  const title = useMemo(() => {
    if (error) {
      return `Error: ${error}`;
    }

    if (loading) {
      return "Loading...";
    }

    if (users.length) {
      return "Users";
    }

    return "No users";
  }, [error, loading, users]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const list = (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );

  return (
    <div>
      <h2>{title}</h2>
      {users.length ? list : ""}
    </div>
  );
};

export default Users;
