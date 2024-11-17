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
import {Toaster} from "react-hot-toast";

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
        <Route path="/torneos-add" element={<ProtectedRoute><TorneoForm/></ProtectedRoute>} />
        <Route path="/torneos/:id_torneo" element={<ProtectedRoute><TorneoForm/></ProtectedRoute> } />
        <Route path="/encuentros" element={<ProtectedRoute><EncuentrosPagina/></ProtectedRoute>} />
        <Route path="/encuentros-add" element={<ProtectedRoute><EncuentroForm/></ProtectedRoute> } />
        <Route path="/encuentros/:id_encuentro" element={<ProtectedRoute><EncuentroForm/></ProtectedRoute> } />
        <Route path="/equipos" element={<ProtectedRoute><EquiposPagina/></ProtectedRoute> } />
        <Route path="/equipos-add" element={<ProtectedRoute><EquipoForm/></ProtectedRoute>  } />
        <Route path="/equipos/:id_equipo" element={<ProtectedRoute><EquipoForm/></ProtectedRoute>} />
        <Route path="/participan" element={ <ProtectedRoute><ParticipanPagina/></ProtectedRoute> } />
        <Route path="/participan-add" element={ <ProtectedRoute><ParticipanForm/></ProtectedRoute> } />
        <Route path="/participan/:id_participa" element={<ProtectedRoute><ParticipanForm/></ProtectedRoute>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Toaster/>
    </BrowserRouter>
  );
}

export default App;