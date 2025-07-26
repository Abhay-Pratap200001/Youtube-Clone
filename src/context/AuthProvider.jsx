import { createContext, useContext, useEffect, useState } from "react";
import { fetchData } from "../utils/rapidapi";

export const AuthContext = createContext(); //This context will store and provide data (like loading, data

export default function AuthProvider({ children }){//giving child as a parameter so we can use conext in all component 
  const [loading, setLoading] = useState(false);// for loading page
  const [data, setData] = useState([]);
  const [value, setValue] = useState("New");

  useEffect(() => {
    fetchAlldata(value);//intial value is new
  }, [value]);// run when value change

  const fetchAlldata = (query) => {
    setLoading(true);
    fetchData(`search/?q=${query}`)//create a dynamic search URL 
    .then(({contents}) => {// destructuring data and extract data from contents to set data 
      // console.log(contents);  
      setData(contents);
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