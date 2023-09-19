import React, { useState } from "react";

interface User {
  username: string;
  password: string;
  email: string;
}

function Login({}) {
  const [identifier, setIdentifier] = useState(""); 
  const [password, setPassword] = useState("");
  const users: User[] = [
    { username: "mahdi", password: "123", email: "mahdi@example.com" },
    { username: "abol", password: "456", email: "abol@example.com" },
    { username: "yasin", password: "78", email: "yasin@example.com" },
    { username: "ali3", password: "910", email: "ali3@example.com" },
    { username: "mamad", password: "911", email: "mamad@example.com" },
  ];

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user = users.find(
      (user) => (user.email === identifier || user.username === identifier) && user.password === password
    );

    if (user) {
      alert("Login successful!");
    } else {
      alert("Login failed");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label className="text-lg  bg-grape-primary p-l ">نام کاربری یا ایمیل:</label>
          <input
            type="text"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <h2>List of Users:</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            Username: {user.username}, Email: {user.email}
          </li>
        ))}
      </ul>
      <p className="iran-yekan-font text-heading-l text-blue-secondary bg-blue-primary">ایران یکان
      </p>
    </div>
  );
}

export default Login;
