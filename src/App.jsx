import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
//importamos las páginas creadas
import { TorneoPagina } from "./pages/TorneoPagina";
import { TorneoForm } from "./pages/TorneoForm" ;
import { Navigation } from "./components/navigation";
import { EncuentrosPagina } from "./pages/EncuentrosPagina";
import { EquiposPagina } from "./pages/EquiposPagina";
import { EquipoForm } from "./pages/EquipoForm";
import { EncuentroForm } from "./pages/EncuentrosForm";
import {ParticipanPagina} from "./pages/ParticipanPagina";
import { ParticipanForm } from "./pages/ParticipanForm";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { ProtectedRoute } from "./components/ProtectedRoute";

function Logout(){
  localStorage.clear();
  return <Navigate to="/login/"/>
}

function RegisterAndLogout(){
  localStorage.clear();
  return <Register/>
}


function App(){
  return(
    <BrowserRouter>
    <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/logout" element={<Logout/>} />
        <Route path="/register" element={<RegisterAndLogout/>} />
        <Route path="/torneos" element={<ProtectedRoute><TorneoPagina/></ProtectedRoute>} />
        <Route path="/torneos-add" element={<TorneoForm/>} />
        <Route path="/torneos/:id_torneo" element={<TorneoForm/>} />
        <Route path="/encuentros" element={<EncuentrosPagina/>} />
        <Route path="/encuentros-add" element={<EncuentroForm/>} />
        <Route path="/encuentros/:id_encuentro" element={<EncuentroForm/>} />
        <Route path="/equipos" element={<EquiposPagina/>} />
        <Route path="/equipos-add" element={<EquipoForm/>} />
        <Route path="/equipos/:id_equipo" element={<EquipoForm/>} />
        <Route path="/participan" element={<ParticipanPagina/>} />
        <Route path="/participan-add" element={<ParticipanForm/>} />
        <Route path="/participan/:id_participa" element={<ParticipanForm/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;