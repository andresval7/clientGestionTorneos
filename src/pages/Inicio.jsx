import '../assets/styles/style.css';
import foto2 from "../assets/img/foto2.png";
import foto3 from "../assets/img/foto3.png";

import iconsocial1 from "../assets/img/ings.png";
import iconsocial2 from "../assets/img/tiktok.png";
import iconsocial3 from "../assets/img/face.png";

import { NavBarInicio } from '../components/NavPagina';


export function Inicio() {
   
    return <div>
         <NavBarInicio/>
         
            {/* Inicio */}
            <section id="inicio" className="inicio">
                <div className="contenedor-seccion">
                    <div className="info">
                        <h2>
                            CAER ESTÁ PERMITIDO.{" "}
                            <span className="txtRojo">¡LEVANTARSE ES OBLIGATORIO!</span>
                        </h2>
                        <p>
                            Únete y demuestra tu grandeza en cada torneo. Inscríbete ahora y
                            acepta el desafío.
                        </p>
                        <a href="#lucha" className="btn-mas">
                            <i className="fa-solid fa-circle-down"></i>
                        </a>
                    </div>
                    <div className="opciones">
                        <div className="opcion">01.RUGBY</div>
                        <div className="opcion">02.CALCIO</div>
                        <div className="opcion">03.FUTBOL</div>
                        <div className="opcion">04.BALONCESTO</div>
                        <div className="opcion">05.HOCKEY</div>
                        <div className="opcion">06.BASEBALL</div>
                    </div>
                </div>
            </section>

            {/* Nosotros */}
            <section id="Nosotros" className="nosotros">
                <div className="fila">
                    <div className="col">
                        <img src={foto2} alt="Descripción" />
                    </div>
                    <div className="col">
                        <div className="contenedor-titulo">
                            <div className="numero">01</div>
                            <div className="info">
                                <span className="frase">¡CREA, INSCRÍBETE Y COMPITE!</span>
                                <h2>LA PLATAFORMA DONDE LOS TORNEOS COBRAN VIDA.</h2>
                            </div>
                        </div>
                        <p className="p-especial"></p>
                        <p>
                            Somos la plataforma que te brinda el espacio perfecto para crear y
                            gestionar tus propios torneos. Inscríbete, define tus encuentros y
                            lleva la competencia al siguiente nivel. ¡Tu torneo, tus reglas!
                        </p>
                    </div>
                </div>
                <hr />
                <div className="fila-nosotros">
                    <div className="col1">
                        <span className="frase">
                            <span className="txtRojo">LUCHA</span> JUNTO A LOS MEJORES
                        </span>
                        <h2>
                            PARTICIPA <span className="txtRojo">LUCHA</span> Y GANA!
                        </h2>
                    </div>
                    <div className="col2">
                        <button>INSCRIBETE HOY!</button>
                    </div>
                </div>
            </section>

            {/* Deportes */}
            <section id="Deportes" className="deportes">
                <div className="contenido-deportes">
                    <div className="fila">
                        <div className="col">
                            <div className="contenedor-titulo">
                                <div className="numero">02</div>
                                <div className="info">
                                    <span className="frase">ENCUENTRA TU PASIÓN</span>
                                    <h2>ELIGE TU DEPORTE, ENTRE A LA COMPETENCIA</h2>
                                </div>
                            </div>
                            <p className="p-especial"></p>
                            <p>
                                Explora todos los deportes disponibles y encuentra torneos en tu
                                disciplina favorita. Desde equipos amateurs hasta competidores
                                avanzados, aquí tienes el espacio para jugar, ganar y destacar.
                                ¡Selecciona tu deporte y comienza tu camino hacia la victoria!
                            </p>
                        </div>
                        <div className="col">
                            <img src={foto3} alt="Descripción" />
                        </div>
                    </div>
                </div>
                <div className="info-deportes">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <i className="fa-solid fa-futbol"></i>
                                    <h3>
                                        <span className="txtRojo">Torneos </span>de Futbol
                                    </h3>
                                    <p>Descripción breve del torneo de fútbol.</p>
                                </td>
                                <td>
                                    <i className="fa-solid fa-person-running"></i>
                                    <h3>
                                        <span className="txtRojo">Torneos </span>de Rugby
                                    </h3>
                                    <p>Descripción breve del torneo de rugby.</p>
                                </td>
                                <td>
                                    <i className="fa-solid fa-hand-fist"></i>
                                    <h3>
                                        <span className="txtRojo">Torneos </span>de Calcio
                                        Florentino
                                    </h3>
                                    <p>Descripción breve del torneo de calcio.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i className="fa-solid fa-basketball"></i>
                                    <h3>
                                        <span className="txtRojo">Torneos </span>de Baloncesto
                                    </h3>
                                    <p>Descripción breve del torneo de baloncesto.</p>
                                </td>
                                <td>
                                    <i className="fa-solid fa-baseball"></i>
                                    <h3>
                                        <span className="txtRojo">Torneos </span>de Baseball
                                    </h3>
                                    <p>Descripción breve del torneo de béisbol.</p>
                                </td>
                                <td>
                                    <i className="fa-solid fa-hockey-puck"></i>
                                    <h3>
                                        <span className="txtRojo">Torneos </span>de Hockey
                                    </h3>
                                    <p>Descripción breve del torneo de hockey.</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Footer */}
            <footer>
                <div className="footer-container">
                    <div className="footer-section footer-app-name">Gestión Toneos</div>
                    <div className="footer-section footer-nav">
                        <h3>Navegación</h3>
                        <a href="#home">Inicio</a>
                        <a href="#about">Nosotros</a>
                        <a href="#services">Servicios</a>
                        <a href="#contact">Contacto</a>
                    </div>
                    <div className="footer-section footer-terms">
                        <h3>Términos y Condiciones</h3>
                        <a href="#terms">Términos de uso</a>
                        <a href="#terms">Política de privacidad</a>
                    </div>
                    <div className="footer-section footer-socials">
                        <h3>Redes sociales</h3>
                        <div className="icons-social">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <img src={iconsocial3} alt="Facebook" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <img src={iconsocial1} alt="Twitter" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <img src={iconsocial2} alt="Instagram" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    &copy; 2024 Nombre de la Aplicación. Todos los derechos reservados.
                </div>
            </footer>
       



    </div>
}