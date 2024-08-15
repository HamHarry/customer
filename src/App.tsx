import { useCallback, useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

export interface User {
  id: number;
  fname: string;
  lname: string;
  username: string;
  avatar: string;
}

const App = () => {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = useCallback(async () => {
    const res = await axios.get<User[]>("https://www.melivecode.com/api/users");
    const usersData = res.data;
    setUsers(usersData);
  }, []);
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div>
      <table>
        <thead>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>username</th>
          <th>avatar</th>
        </thead>
        <tbody>
          {users.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.fname}</td>
                <td>{item.lname}</td>
                <td>{item.username}</td>
                <td>
                  <img src={item.avatar} alt="" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default App;
