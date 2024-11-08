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


function App(){
  return(
    <BrowserRouter>
    <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Navigate to="/torneos"/>}/>
        <Route path="/torneos" element={<TorneoPagina/>} />
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;