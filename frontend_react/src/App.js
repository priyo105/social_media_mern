import { BrowserRouter,Navigate,Routes, Route, Form } from "react-router-dom";
import HomePage from "./views/HomePage";
import LoginPage from "./views/LoginPage";
import ProfilePage from "./views/profilePage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";

import { themeSettings } from "./theme";
import NavBar from "./views/navBar";
import AuthForm from "./views/LoginPage/Form";

function App() {
  
  const mode= useSelector((state)=>state.mode); // use selector gets the state from the redux
  const theme= useMemo(()=>createTheme(themeSettings(mode)), [mode])
  const isAuth=Boolean(useSelector(state=>state.token))
  return (
    <div className="App">
       <BrowserRouter>
       <ThemeProvider theme={theme}>
        <CssBaseline />       
         <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={isAuth ?<HomePage /> : <Navigate to="/" />} />
            <Route path="/profile/:userId" element={ isAuth ?<ProfilePage/> : <Navigate to="/" />} />
            
         </Routes>
      </ThemeProvider>
       
       </BrowserRouter>
    </div>
  );
}

export default App;
