import { createContext, useContext, useEffect, useState } from "react";
import { fetchData } from "../utils/rapidapi";

export const AuthContext = createContext();

export default function AuthProvider({ children }){//giving child as a parameter so we can use conext in all component 
  const [loading, setLoading] = useState(false);// for loading page
  const [data, setData] = useState([]);
  const [value, setValue] = useState("New");

  useEffect(() => {
    fetchAlldata(value);//value of data was new
  }, [value]);

  const fetchAlldata = (query) => {
    setLoading(true);
    fetchData(`search/?q=${query}`).then(({contents}) => {
      console.log(contents);
      setData(contents);// destructuring data and keepig data from contents to set data 
      setLoading(false);
    });
  };
  return (
    // sending data and other values loading to all component globally 
    <AuthContext.Provider value={{ loading, data, value, setValue }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);// making useAuth fun to use it