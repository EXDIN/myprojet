import { createContext, useEffect, useState } from 'react';
import { IMyComponentProps, TypeUserContext, typeUserData } from '../../typesAndInterfaces';


export const UserDataContext = createContext<TypeUserContext>({
  user: {
    name: "",
    isAuth: false
  },
  updateUser: (): void => {}
});

export const AppProvider: React.FC<IMyComponentProps> = ({ children }) => {
  const [user, setUser] = useState<typeUserData>({name: "", isAuth: false});
  
  useEffect(() => {
    const userData = sessionStorage.getItem('sessionUserData')
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

  const updateUser = (newUser:  {isAuth: boolean, name: string}) => {
    setUser(newUser);
    sessionStorage.setItem('sessionUserData', JSON.stringify(newUser));
  };

  return (
    <UserDataContext.Provider value={{ user, updateUser }}>
      {children}
    </UserDataContext.Provider>
  );
};