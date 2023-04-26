import { Route, Routes } from "react-router-dom";
import Home from "./src/Home";
import CustomToolbar from "./src/Components/Drawer";
import ErrorPage from "./src/Pages/ErrorPage";
const RouterApp = () => {
  return  <LogedInRoutes />;
};

const NotLogedRoutes = () => {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
    </Routes>
  );
};
const LogedInRoutes = () => {
  return (
    <>
    <CustomToolbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        
        <Route path='*' element={<ErrorPage />}/>
      </Routes>
    </>
  );
};
export default RouterApp;