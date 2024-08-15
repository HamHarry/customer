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

  const fetchUsersData = useCallback(async () => {
    const res = await axios.get<User[]>("https://www.melivecode.com/api/users");
    const usersData = res.data;

    setUsers(usersData);
  }, []);

  // เรียกใช้ทุกครั้งตอน reload
  useEffect(() => {
    fetchUsersData();
  }, [fetchUsersData]);

  return (
    <div>
      {users.map((item, index) => (
        <p key={index}>{item.id}</p>
      ))}
    </div>
  );
};

export default App;
