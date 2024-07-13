import logo from "./logo.svg";
import "./App.css";
import ComponentC from "./Components/ComponentC";
import React from "react";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={"Yanil"}>
        <ChannelContext.Provider value={"Magar"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
