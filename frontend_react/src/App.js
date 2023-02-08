import { BrowserRouter,Navigate,Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import LoginPage from "./views/LoginPage";
import ProfilePage from "./views/profilePage";

function App() {
  
  
  return (
    <div className="App">
       <BrowserRouter>
         
         <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile/:userId" element={ <ProfilePage />} />
            
         </Routes>
       
       
       </BrowserRouter>
    </div>
  );
}

export default App;
