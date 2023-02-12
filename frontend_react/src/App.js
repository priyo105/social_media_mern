import { BrowserRouter,Navigate,Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import LoginPage from "./views/LoginPage";
import ProfilePage from "./views/profilePage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";

import { themeSettings } from "./theme";
import NavBar from "./views/navBar";

function App() {
  
  const mode= useSelector((state)=>state.mode);
  const theme= useMemo(()=>createTheme(themeSettings(mode)), [mode])

  return (
    <div className="App">
       <BrowserRouter>
       <ThemeProvider theme={theme}>
        <CssBaseline />       
         <Routes>
            <Route path="/" element={<NavBar />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile/:userId" element={ <ProfilePage />} />
            
         </Routes>
      </ThemeProvider>
       
       </BrowserRouter>
    </div>
  );
}

export default App;
