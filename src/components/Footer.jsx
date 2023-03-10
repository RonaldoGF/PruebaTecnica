import { useState, useEffect } from 'react';
import './Footer.css';

function WindowSize() {
    const [windoSize, setWindowSize] = useState()
    useEffect(() => {
      function handleResize() {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
    }, [])
    return windoSize;
}

import React from 'react'

export const Footer = () => {
    const sizeWindow = WindowSize();
    return (
    <>
        { 
            sizeWindow && sizeWindow.width <=768 ? <div></div>
            : <footer className='foot'>
                <div className='contain'>
                        <div className='description-contain'>
                            <h2>SÍGUENOS</h2>
                            <div className='iconos'>
                                <img src="https://moviesshopco.vtexassets.com/_v/public/assets/v1/published/vtex.store-footer@2.26.0/public/react/ebd4bd10e66138168eb6a582e00790ea.svg" alt="" height='23' width='20' />
                                <img src="https://moviesshopco.vtexassets.com/_v/public/assets/v1/published/vtex.store-footer@2.26.0/public/react/6a61a302319c062aceb9562a66381a63.svg" alt="" height='23' width='20' />
                            </div>
                            <h2> CONTÁCTANOS</h2>
                            <a href="" className='shop'><svg xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 96 960 960" width="15"><path d="M240 657h313v-60H240v60Zm0-130h480v-60H240v60Zm0-130h480v-60H240v60ZM80 976V236q0-23 18-41.5t42-18.5h680q23 0 41.5 18.5T880 236v520q0 23-18.5 41.5T820 816H240L80 976Zm60-145 75-75h605V236H140v595Zm0-595v595-595Z"/></svg>servicioalcliente@moviesshop.co </a>
                            <a href="">+ 57 300 910 8311</a>
                            <a href="" className='shops'><svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M480.089 566Q509 566 529.5 545.411q20.5-20.588 20.5-49.5Q550 467 529.411 446.5q-20.588-20.5-49.5-20.5Q451 426 430.5 446.589q-20.5 20.588-20.5 49.5Q410 525 430.589 545.5q20.588 20.5 49.5 20.5ZM480 897q133-121 196.5-219.5T740 504q0-117.79-75.292-192.895Q589.417 236 480 236t-184.708 75.105Q220 386.21 220 504q0 75 65 173.5T480 897Zm0 79Q319 839 239.5 721.5T160 504q0-150 96.5-239T480 176q127 0 223.5 89T800 504q0 100-79.5 217.5T480 976Zm0-472Z"/></svg>NUESTRAS TIENDAS</a>
                        </div>
                        <div className='description-contain'>
                            <h2>TE AYUDAMOS</h2>
                            <a href="">Preguntas frecuentas</a>
                            <a href="">Garantía de productos</a>
                            <a href="">Cambios y devoluciones</a>
                            <a href="">Contáctanos</a>
                        </div>
                        <div className='description-contain'>
                            <h2>INFORMACIÓN LEGAL</h2>
                            <a href="">Términos y condiciones uso sitio web</a>
                            <a href="">Política de tratamiento de la información personal</a>
                            <a href="">Términos y condiciones</a>
                            <a href="">Promociones</a>
                            <a href="">Derecho de retracto</a>
                            <a href="">Superintendencia industria y</a>
                            <a href="">Comercio - SIC</a>
                            <a href="">Autorización tratamiento de datos</a>
                            <a href="">Transparencia y Ético</a>
                            <a href="">Empresarial</a>
                        </div>
                        <div className='description-contain'>
                            <h2>MI CUENTA</h2>
                            <a href="">Iniciar sesión</a>
                            <a href="">Rastrea pedido</a>
                        </div>
                        <div className='description-contain'>
                            <h2>ACERCA DE MOVIES</h2>
                            <a href="">Nuestra historia</a>
                            <a href="">Trabaja con nosotros</a>
                        </div>
                </div>
                <p className="derechos">
                    Movies© 2022 ESTRATEGIA COMERCIAL DE COLOMBIA S.A.S. NIT: 830507952-5 Dirección: 
                    Calle 60 Sur N° 43A 97 Sabaneta, Colombia Tel: (+57) 604 4442849  Correo: servicioalcliente@movies.com.co
                    <img src="https://www.moviesshop.co/arquivos/vtex-r.svg" width="39px" height="14.66px" alt="" />
                    <img src="https://www.moviesshop.co/arquivos/ssl-secure.svg" alt="" />
                </p>
            </footer>  
        }
    </>
    )
}
