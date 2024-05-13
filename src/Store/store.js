import { createContext, useContext,  useState } from "react";
const StoreContextController = createContext({});

export const MyFunctions = () => {
  return useContext(StoreContextController);
};

const StoreContext = ({ children }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    console.log("Arya");
    setSidebarVisible(!sidebarVisible);
  };
  const functionObject = {
    sidebarVisible,
    setSidebarVisible,
    toggleSidebar
  };

  return (
    <StoreContextController.Provider value={functionObject}>
      {children}
      
    </StoreContextController.Provider>
  );
};

export { StoreContext };
