import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RegisterPage from "./pages/RegisterPage";
import BeasiswaPage from "./pages/BeasiswaPage";
import ProfilePage from "./pages/ProfilePage";
import DonaturPage from "./pages/DonaturPage";
import DonaturDetail from "./pages/DonaturDetail";
import FormBeasiswa  from "./pages/FormBeasiswa";
import DetailBeasiswa from "./pages/DetailBeasiswa";
import DonaturProfile from "./pages/DonaturProfile";
import ListPendaftar from './pages/Donatur/ListPendaftar';
import FormDonatur from './pages/Donatur/FormDonatur';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/beasiswa' element={< BeasiswaPage />}></Route>
          <Route exact path='/donatur' element={<DonaturPage />}></Route>
          <Route exact path='/profile' element={<ProfilePage />}></Route>
          <Route exact path='/register' element={<RegisterPage />}></Route>
          <Route exact path='/formbeasiswa' element={<FormBeasiswa />}></Route>
          <Route exact path='/donatur1' element={<DonaturDetail />}></Route>
          <Route exact path='/detailbeasiswa' element={<DetailBeasiswa />}></Route>
          <Route exact path='/donaturprofile' element={<DonaturProfile />}></Route>
          <Route exact path='/listpendaftar' element={<ListPendaftar />}></Route>
          <Route exact path='/formdonatur' element={<FormDonatur />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;