import { useEffect, createContext, useState } from "react";

export const CurrentUserContext = createContext(null);

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({ status: 'loading' });
  
  useEffect(() => {
    fetch('/api/me/profile')
      .then(res => res.json())
      .then(data => {
        setCurrentUser({ status: 'idle', currentuser: data.profile })
      })
      .catch(() => setCurrentUser({ status: 'failed' }))
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser} >
      {children}
    </CurrentUserContext.Provider>
  )
}