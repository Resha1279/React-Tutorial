import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(response.statusText);
        }
      })
      .then((user) => {
        const { login } = user;
        setUser(login);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
      });
  }, []);

  if (isLoading) {
    return (
      <div>
        <h4>Loading...</h4>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h4>
          Error
          <span role="img" aria-label="emoji">
            😮
          </span>
        </h4>
      </div>
    );
  }

  return (
    <>
      <h3>{user}</h3>
    </>
  );
};

export default MultipleReturns;
