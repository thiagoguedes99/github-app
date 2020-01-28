import React, { createContext, useState } from 'react';

export const GithubContext = createContext();

export function GithubContextProvider({ children }) {
  // const [user, setUser] = useState('');
  const [user, setUser] = useState({});

  return (
    <GithubContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
}
