import { useState, useEffect } from 'react';

import './Navbar.css';

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
export const Navbar = () => {
   const sizeWindow = WindowSize();
   const [ isOpen, setIsOpen ] = useState( 'nav__menu' );
   const [ toggleIcon, setToggleIcon ] = useState( "nav__toggler" ); 
   const [openMobile, setOpenMobile] = useState(false);
   const navToggle = (  ) => {
        isOpen === 'nav__mobile' 
        ? setIsOpen( 'nav__mobile nav__active' )
        : setIsOpen( 'nav__mobile' );

        //Toggler Icon 
        toggleIcon === 'nav__toggler' 
        ? setToggleIcon('nav__toggler toggle')
        : setToggleIcon('nav__toggler');
   }; 
   return (
    /*Desktop*/
    <>
    
    { sizeWindow && sizeWindow.width <=768 ? <img className='title__advice-mobile' src="https://moviesshopco.vtexassets.com/assets/vtex.file-manager-graphql/images/a27caf3d-b918-41b3-a858-9c6623b9513e___d16261d3194dc0021c1ffece69a8ac86.gif" alt="" />
        : <img className='title__advice' src="https://moviesshopco.vtexassets.com/assets/vtex.file-manager-graphql/images/162d809f-0625-4788-afc5-706af6124d99___53e559251e243b96cc6d531d363b64fa.gif" alt="" />
    }
    <nav className = "nav">
    <div className='icons__mobile-nav'>    
        <div onClick={ () => { navToggle
        setOpenMobile(true) } } className = { toggleIcon }>
            <div className = "line1"></div>
            <div className = "line2"></div>
            <div className = "line3"></div>
        </div>
    </div>
    {
        sizeWindow && sizeWindow.width <=768 ?
        <div className='icons--mobile'>
            <div className='search-'>
                <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="20px" height="20px"><path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"/></svg>
            </div>
            <div className='title'>
                <a href = "#" className="nav__brand"><img src="https://moviesshopco.vtexassets.com/assets/vtex/assets-builder/moviesshopco.theme3/3.0.40/movies-logo___38662b246dad72023156ecfd25bec311.svg" alt="" /></a>
            </div>
            <div className='icons--mobile-end'>
            <div>
                <img className='account' src="https://moviesshopco.vtexassets.com/assets/vtex/assets-builder/moviesshopco.theme3/3.0.40/user-icon___ef462ae332ac1193a82a58bfde8ac473.svg" alt="" /> 
            </div>
            <div>
                <img className='car-buy' src="https://moviesshopco.vtexassets.com/assets/vtex/assets-builder/moviesshopco.theme3/3.0.40/shopping___eba0ed4ccfbadce9d287241eabeed60f.svg" alt=""/>
            </div>
            </div>
        </div>
        : ''
    }
        
        { sizeWindow && sizeWindow.width <= 768 ? <div className='mobile__options' data-state = { openMobile }>
            <div className='Title__hello-mobile'><p>¡HOLA!</p> <button onClick={ () => setOpenMobile(false) }>X</button></div>
            <hr />
            <section>
                <div>
                    <p className='nav__item-mobile'>MUJER</p>
                    <p className='nav__item-mobile'>HOMBRE</p>
                    <p className='nav__item-mobile cyberdays'>CYBERDAYS</p>
                    <p className='nav__item-mobile newarrivals'>NEW ARRIVALS</p>
                    <p className='nav__item-mobile basicos'>BÁSICOS</p>
                    <hr />
                </div>
            </section>
            <section className='options__icons'>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="17" viewBox="0 96 960 960" width="30"><path d="M480 575q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160 896v-94q0-38 19-65t49-41q67-30 128.5-45T480 636q62 0 123 15.5t127.921 44.694q31.301 14.126 50.19 40.966Q800 764 800 802v94H160Zm60-60h520v-34q0-16-9.5-30.5T707 750q-64-31-117-42.5T480 696q-57 0-111 11.5T252 750q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570 425q0-39-25.5-64.5T480 335q-39 0-64.5 25.5T390 425q0 39 25.5 64.5T480 515Zm0-90Zm0 411Z"/></svg>
                    <p>MI CUENTA</p>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="17" viewBox="0 96 960 960" width="30"><path d="m480 935-41-37q-105.768-97.121-174.884-167.561Q195 660 154 604.5T96.5 504Q80 459 80 413q0-90.155 60.5-150.577Q201 202 290 202q57 0 105.5 27t84.5 78q42-54 89-79.5T670 202q89 0 149.5 60.423Q880 322.845 880 413q0 46-16.5 91T806 604.5Q765 660 695.884 730.439 626.768 800.879 521 898l-41 37Zm0-79q101.236-92.995 166.618-159.498Q712 630 750.5 580t54-89.135q15.5-39.136 15.5-77.72Q820 347 778 304.5T670.225 262q-51.524 0-95.375 31.5Q531 325 504 382h-49q-26-56-69.85-88-43.851-32-95.375-32Q224 262 182 304.5t-42 108.816Q140 452 155.5 491.5t54 90Q248 632 314 698t166 158Zm0-297Z"/></svg>
                    <p>MIS FAVORITOS</p>
                </div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" height="17" viewBox="0 96 960 960" width="30"><path d="M480.089 566Q509 566 529.5 545.411q20.5-20.588 20.5-49.5Q550 467 529.411 446.5q-20.588-20.5-49.5-20.5Q451 426 430.5 446.589q-20.5 20.588-20.5 49.5Q410 525 430.589 545.5q20.588 20.5 49.5 20.5ZM480 897q133-121 196.5-219.5T740 504q0-117.79-75.292-192.895Q589.417 236 480 236t-184.708 75.105Q220 386.21 220 504q0 75 65 173.5T480 897Zm0 79Q319 839 239.5 721.5T160 504q0-150 96.5-239T480 176q127 0 223.5 89T800 504q0 100-79.5 217.5T480 976Zm0-472Z"/></svg>
                    <p>TIENDAS</p>
                </div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" height="17" viewBox="0 96 960 960" width="30"><path d="M240 657h313v-60H240v60Zm0-130h480v-60H240v60Zm0-130h480v-60H240v60ZM80 976V236q0-23 18-41.5t42-18.5h680q23 0 41.5 18.5T880 236v520q0 23-18.5 41.5T820 816H240L80 976Zm60-145 75-75h605V236H140v595Zm0-595v595-595Z"/></svg>
                    <p>TE AYUDAMOS</p>
                </div>
            </section>
        </div> 
        : 
        <ul className="nav__menu">
            <a href = "#" className="nav__brand"><img src="https://moviesshopco.vtexassets.com/assets/vtex/assets-builder/moviesshopco.theme3/3.0.40/movies-logo___38662b246dad72023156ecfd25bec311.svg" alt="" /></a>
            <div className='men'>
                <li className = "nav__item"><a href = "#" className = 'nav__link' id='mujer'>MUJER</a></li>
                <div className='dropdown-nav'>
                    <div>
                    <h4>MUJER</h4>
                    <a href="">Camisetas</a>
                    <a href="">Pijamas</a>
                    <a href="">Ropa interior</a>
                    <a href="">Chaquetas y Buzos</a>
                    <a href="">Joggers, pantalones y shorts</a>
                    <a href="">Calzado</a>
                    <a href="">Accesorios</a>
                    </div>
                </div>
            </div>
            <li className = "nav__item"><a href = "#" className = 'nav__link'>HOMBRE</a></li>
            <li className = "nav__item"><a href = "#" className = 'nav__link' id='newarrivals'>NEW ARRIVALS</a></li>
            <li className = "nav__item"><a href = "#" className = 'nav__link' id='basicos'>BÁSICOS</a></li>
            <li className = "nav__item"><a href = "#" className = 'nav__link' id='cyberdays'>CYBER DAYS</a></li>
            <div className='icons__desktop'>
                <li className = "nav__item" id='search'> 
                    <div className="barra">
                            <input type="text" placeholder='Encuentra tu preferido' />
                            <img className='search' src="https://moviesshopco.vtexassets.com/assets/vtex/assets-builder/moviesshopco.theme3/3.0.40/search___09b655665e53917126ff14335ac8a0cb.svg" alt="" />
                    </div>
                </li>
                <li className = "nav__item"> <img className='help' src="https://moviesshopco.vtexassets.com/assets/vtex/assets-builder/moviesshopco.theme3/3.0.40/faq___644975c18e3eaa506fbf13b6ad9c920b.svg" alt="" /> </li>
                <li className = "nav__item"> <img className='account' src="https://moviesshopco.vtexassets.com/assets/vtex/assets-builder/moviesshopco.theme3/3.0.40/user-icon___ef462ae332ac1193a82a58bfde8ac473.svg" alt="" /> </li>
                <li className = "nav__item"> <img className='favorites' src="https://moviesshopco.vtexassets.com/assets/vtex/assets-builder/moviesshopco.theme3/3.0.40/heart-icon___5e5273482e1c181e22053a06bc56956d.svg" alt="" /> </li>
                <li className = "nav__item"> <img className='map' src="https://moviesshopco.vtexassets.com/arquivos/map-locator-2.svg" alt=""/> </li>
                <li className = "nav__item"> <img className='car-buy' src="https://moviesshopco.vtexassets.com/assets/vtex/assets-builder/moviesshopco.theme3/3.0.40/shopping___eba0ed4ccfbadce9d287241eabeed60f.svg" alt=""/> </li>
            </div>  
        </ul> 
        }
        
    </nav>
    </>
   )
}
