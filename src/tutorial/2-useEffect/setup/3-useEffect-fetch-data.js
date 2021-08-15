import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [user, setUser] = useState([]);
  const getData = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUser(users);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h3>github users</h3>
      <ul className="users">
        {user.map((item) => {
          const { id, login, avatar_url, html_url } = item;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
