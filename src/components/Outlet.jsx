import React, { useState, useEffect } from 'react'
import './Outlet.css';

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

export const Outlet = () => {
    const sizeWindow = WindowSize();
    const [listProducts, setlistProducts ] = useState([]);
    useEffect(() => {
        const fetchListProducts = async() => {
            const response = await fetch('http://localhost:3400/listPrices', { 
                method: 'GET'
            });
            const data = await response.json();
            setlistProducts(data)
        }
        fetchListProducts();
    },[]);
  return (
    <>
        { 
            sizeWindow && sizeWindow.width <=768 ? ''
            :  
            <div className='outlet'>
                    <div className='information_product-actual'>
                        <a href="">Movies /</a>
                        <a href="">Hombre /</a>
                        <a href="">Chaquetas y Buzos /</a>
                        <span>Chaqueta género neutro, caqui con cierre de Mandalorian</span>
                    </div>
                        <div className='container__general-products'>

                            <div className='container__images--vertical'>
                                <img src="https://moviesshopco.vtexassets.com/arquivos/ids/173068-1600-1600?v=638091310430670000&width=1600&height=1600&aspect=true" alt="" />
                                <img src="https://moviesshopco.vtexassets.com/arquivos/ids/173069-1600-1600?v=638091311513030000&width=1600&height=1600&aspect=true" alt="" />
                                <img src="https://moviesshopco.vtexassets.com/arquivos/ids/173070-1600-1600?v=638091311685100000&width=1600&height=1600&aspect=truetps://moviesshopco.vtexassets.com/arquivos/ids/173076-1600-1600?v=638091312915630000&width=1600&heighttps://moviesshopco.vtexassets.com/arquivos/ids/173070-1600-1600?v=638091311685100000&width=1600&height=1600&aspect=true=1600&aspect=true" alt="" /> 
                                {/* <img src="https://moviesshopco.vtexassets.com/arquivos/ids/173071-1600-1600?v=638091311783300000&width=1600&height=1600&aspect=true" alt="" />                            
                                <img src="https://moviesshopco.vtexassets.com/arquivos/ids/173072-1600-1600?v=638091312048800000&width=1600&height=1600&aspect=true" alt="" />                            
                                <img src="https://moviesshopco.vtexassets.com/arquivos/ids/173073-1600-1600?v=638091312233030000&width=1600&height=1600&aspect=true" alt="" />                            
                                <img src="https://moviesshopco.vtexassets.com/arquivos/ids/173074-1600-1600?v=638091312428370000&width=1600&height=1600&aspect=true" alt="" />                            
                                <img src="https://moviesshopco.vtexassets.com/arquivos/ids/173076-1600-1600?v=638091312915630000&width=1600&height=1600&aspect=true" alt="" />                            
                                <img src="https://moviesshopco.vtexassets.com/arquivos/ids/173077-1600-1600?v=638091313610530000&width=1600&height=1600&aspect=true" alt="" />                            
                             */}
                            </div>
                            <div className='container--imagenes'>
                                <section className='slider'>
                                    <img src="https://moviesshopco.vtexassets.com/arquivos/ids/173068-1600-1600?v=638091310430670000&width=1600&height=1600&aspect=true" alt="" />
                                    <img src="https://moviesshopco.vtexassets.com/arquivos/ids/173069-1600-1600?v=638091311513030000&width=1600&height=1600&aspect=true" alt="" />
                                    <img src="https://moviesshopco.vtexassets.com/arquivos/ids/173070-1600-1600?v=638091311685100000&width=1600&height=1600&aspect=truetps://moviesshopco.vtexassets.com/arquivos/ids/173076-1600-1600?v=638091312915630000&width=1600&heighttps://moviesshopco.vtexassets.com/arquivos/ids/173070-1600-1600?v=638091311685100000&width=1600&height=1600&aspect=true=1600&aspect=true" alt="" /> 
                                    <img src="https://moviesshopco.vtexassets.com/arquivos/ids/173071-1600-1600?v=638091311783300000&width=1600&height=1600&aspect=true" alt="" />                            
                                    <img src="https://moviesshopco.vtexassets.com/arquivos/ids/173072-1600-1600?v=638091312048800000&width=1600&height=1600&aspect=true" alt="" />                            
                                    <img src="https://moviesshopco.vtexassets.com/arquivos/ids/173073-1600-1600?v=638091312233030000&width=1600&height=1600&aspect=true" alt="" />                            
                                    <img src="https://moviesshopco.vtexassets.com/arquivos/ids/173074-1600-1600?v=638091312428370000&width=1600&height=1600&aspect=true" alt="" />                            
                                    <img src="https://moviesshopco.vtexassets.com/arquivos/ids/173076-1600-1600?v=638091312915630000&width=1600&height=1600&aspect=true" alt="" />                            
                                    <img src="https://moviesshopco.vtexassets.com/arquivos/ids/173077-1600-1600?v=638091313610530000&width=1600&height=1600&aspect=true" alt="" />                            
                                </section>

                                <div className='send-information'>
                                    <div className='car-information'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-truck" width="24" height="17" viewBox="0 0 24 24" strokeWidth="2" 
                                        stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                        <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                        <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" /></svg>
                                        <p>Envío <span>a toda Colombia</span> </p>
                                    </div>
                                    <div className="clock-send">
                                        <img src="https://svgsilh.com/svg/27832.svg" width="24" height="17" alt="" />
                                        <p>Tiempo de entrega <span>3 a 7 <br /> días hábiles</span></p>
                                    </div>
                                    <p> El modelo mide 1,88CM y tiene una talla L</p>
                                </div>                          
                            </div>
                            <div className='container__details--products'>
                                <span className='title__product'>CHAQUETA GÉNERO NEUTRO, CAQUI CON CIERRE DE MANDALORIAN</span>
                                <div className='id-product'>
                                    <div>STAR WARS <span className='identificador'>Ref. 236732-130908-L</span></div>
                                </div>
                                <div className='price'>
                                    <div className='price1'>$ 259.990</div>
                                    <div className='price2' >$233.991</div>
                                </div>
                                <div className="tallas">
                                    <div className='talla'>
                                        <div>S</div>
                                        <div>M</div>
                                        <div>L</div>
                                        <div>XL</div>
                                    </div>
                                    <div className='Guia'>
                                        Guía de tallas
                                    </div>
                                </div>
                                <div className='add-to-bag'>
                                        <button>-</button>
                                        <button>1</button>
                                        <button>+</button>
                                    <button className='add'>AGREGAR A MI BOLSA</button>
                                </div>
                                <hr />
                                <div className='main-container__s2'>
                                    <details className ="main-container__s2__details">
                                        <summary className ="main-container__s2__details__summary">Descripción del producto<img className='main-container__s2__details__icon' src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt="" /> </summary>
                                        <p className="main-container__s2__details__paragraph">¡El estilo que cautivará su clóset! Una chaqueta ideal para a
                                        compañar sus ocasiones más especiales y lucir muy cool. Cuenta con cierre en frente para más practicidad y comodidad. 
                                        Bolsillos laterales y cuello redondo que lo harán sentir cómodo y lleno de confort. Estampado posterior, mangas y en el frente. Cuello, puños y ruedo en contraste. Perfecta para combinar con jean y tenis.</p>
                                    </details>
                                    
                                        
                                    <details className ="main-container__s2__details">
                                        <summary className ="main-container__s2__details__summary">Especificaciones<img className='main-container__s2__details__icon' src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt="" /> </summary>
                                        <p className="main-container__s2__details__paragraph"><span>País de fabricación:</span> 
                                        <br /> Colombia - FABRICANTE/IMPORTADOR: Maquila Internacional de confección
                                        <br /> <span>Registro Sic:</span> 
                                        <br /> 811007991-8
                                        <br /> <span>Especificaciones:</span> 
                                        <br /> Diseño: Chaqueta impermeable con cierre frontal, estampado en mangas y espalda. Cuello redondo y bolsillos laterales. Estampado frontal
                                        <br /> <span>Color:</span> 
                                        <br /> Caqui/Negro</p>
                                    </details>
                                
                                    <details className ="main-container__s2__details">
                                        <summary className ="main-container__s2__details__summary">Composición<img className='main-container__s2__details__icon' src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt="" /> </summary>
                                        <p className="main-container__s2__details__paragraph">74% Poliéster 24% Algodón 2% Elastano</p>
                                    </details>

                                    <details className ="main-container__s2__details">
                                        <summary className ="main-container__s2__details__summary">Cuidados<img className='main-container__s2__details__icon' src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt="" /> </summary>
                                        <p className="main-container__s2__details__paragraph">- Lavar a mano o en máquina - No lavar en seco - No dejar en remojo 
                                        - No retorcer ni exprimir - Usar agua fría - Usar jabón suave - No usar blanqueador - No blanquear - No usar secadora - No planchar - Secado en tendedero a la sombra</p>
                                    </details>

                                    <details className ="main-container__s2__details">
                                        <summary className ="main-container__s2__details__summary">Descubre más<img className='main-container__s2__details__icon' src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt="" /> </summary>
                                        <p className="main-container__s2__details__paragraph">¡Una chaqueta muy cool! Ahora los looks serán más auténticos y llenos de estilo. Lucirá increíble en cualquier ocasión. Sigue en Movies y conoce más prendas como esta.</p>
                                    </details>

                                    <details className ="main-container__s2__add-favorites">
                                        <summary className ="main-container__s2__details__summary"><svg xmlns="http://www.w3.org/2000/svg" height="17" viewBox="0 96 960 960" width="30"><path d="m480 935-41-37q-105.768-97.121-174.884-167.561Q195 660 154 604.5T96.5 504Q80 459 80 413q0-90.155 60.5-150.577Q201 202 290 202q57 0 105.5 27t84.5 78q42-54 89-79.5T670 202q89 0 149.5 60.423Q880 322.845 880 413q0 46-16.5 91T806 604.5Q765 660 695.884 730.439 626.768 800.879 521 898l-41 37Zm0-79q101.236-92.995 166.618-159.498Q712 630 750.5 580t54-89.135q15.5-39.136 15.5-77.72Q820 347 778 304.5T670.225 262q-51.524 0-95.375 31.5Q531 325 504 382h-49q-26-56-69.85-88-43.851-32-95.375-32Q224 262 182 304.5t-42 108.816Q140 452 155.5 491.5t54 90Q248 632 314 698t166 158Zm0-297Z"/></svg>AGREGAR A FAVORITOS </summary> 
                                    </details>
                                </div>
                                <div>
                                    <div className='credifijo-information'>
                                        <div>
                                            <img src="https://moviesshopco.vtexassets.com/arquivos/logoBlanco_resize.png" alt="" />
                                        </div>
                                        <div className='credifijo-description'>
                                            Compra ahora y págalo hasta en 6 cuotas con Credifin. <a href="#">Solicita aquí tu crédito.</a> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                        <div className='others-products'>
                            <div>
                                <div className='title-others-products'>También te puede <span>INTERESAR</span></div>
                            </div>
                            <div className='items-products'>
                                {
                                    !!listProducts ? listProducts.interest?.map((data) => 
                                        <div className='item-product' key={data.id} > 
                                        <img src={data.image} alt="" />
                                        <div className='title-item'>{data.title}</div>
                                        <div className='description-item'>{data.description}<br />{data.description2}</div>
                                        <a href="">
                                            <div className='price-old'>{data.priceold}</div>
                                            <div className='price-new'>{data.pricenew}</div>
                                        </a>
                                        <button>VER PRODUCTO</button>
                                    </div>
                            
                                     ) : null
                                }
                                
                            </div>

                        </div>
                        
                        <div className='selected'>
                            <div>
                                <div className='title-others-products'>Seleccionados para <span>TI</span></div>
                            </div>
                            <div className='items-products'>
                                {
                                        !!listProducts ? listProducts.selected?.map((data) => 
                                            <div className='item-product' key={data.id} > 
                                            <img src={data.image} alt="" />
                                            <div className='title-item'>{data.title}</div>
                                            <div className='description-item'>{data.description}<br />{data.description2}</div>
                                            <a href="">
                                                <div className='price-old'>{data.priceold}</div>
                                                <div className='price-new'>{data.pricenew}</div>
                                            </a>
                                            <button>VER PRODUCTO</button>
                                        </div>
                                
                                         ) : null
                                }    
                            </div>
                        </div>

                    <div className='information'>
                        <div className='information-icon-advice'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M7 16h34v-5H7Zm-3-5q0-1.2.9-2.1Q5.8 8 7 8h34q1.2 0 2.1.9.9.9.9 2.1v11.95H7V37h11.65v3H7q-1.2 0-2.1-.9Q4 38.2 4 37Zm25.9 33-8.5-8.5 2.15-2.15 6.35 6.35 12-12 2.1 2.2ZM7 11v26-7.9 6.5V11Z"/></svg>
                            <div>Pagos <br /> <span>seguros</span> </div>
                        </div>
                        <div className='information-icon-advice'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-truck" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                            <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                            <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
                            </svg>
                            <div>Envío a <span>todo <br />el país</span></div>
                        </div>
                        <div className='information-icon-advice'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M38.8 23.65q-.25-6.05-4.45-10.25T24.1 8.95v-3q3.6.1 6.775 1.525Q34.05 8.9 36.45 11.3q2.4 2.4 3.825 5.575Q41.7 20.05 41.8 23.65Zm-8.45 0q-.25-2.5-2-4.225Q26.6 17.7 24.1 17.45v-3q3.75.25 6.375 2.85t2.875 6.35ZM39.75 42q-6.1 0-12.125-3T16.8 31.2Q12 26.4 9 20.375 6 14.35 6 8.25q0-.95.65-1.6Q7.3 6 8.25 6h7q.7 0 1.225.475.525.475.675 1.275l1.35 6.3q.1.7-.025 1.275t-.525.975l-5 5.05q2.8 4.65 6.275 8.1Q22.7 32.9 27.1 35.3l4.75-4.9q.5-.55 1.15-.775.65-.225 1.3-.075l5.95 1.3q.75.15 1.25.75T42 33v6.75q0 .95-.65 1.6-.65.65-1.6.65Zm-28.3-23.4 4.05-4.1L14.35 9H9q0 1.95.6 4.275t1.85 5.325ZM29.9 36.75q2.05.95 4.45 1.55 2.4.6 4.65.7v-5.35l-5.15-1.05ZM11.45 18.6ZM29.9 36.75Z"/></svg>
                            <div>Atención al<br /> cliente</div>
                        </div>
                        <div className='information-icon-advice'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-coin-off" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M14.8 9a2 2 0 0 0 -1.8 -1h-1m-2.82 1.171a2 2 0 0 0 1.82 2.829h1m2.824 2.822a2 2 0 0 1 -1.824 1.178h-2a2 2 0 0 1 -1.8 -1" />
                            <path d="M20.042 16.045a9 9 0 0 0 -12.087 -12.087m-2.318 1.677a9 9 0 1 0 12.725 12.73" />
                            <path d="M12 6v2m0 8v2" />
                            <path d="M3 3l18 18" />
                            </svg>
                            <div>Devoluciones<br /> <span>Gratuitas</span></div>
                        </div>
                        <div className='information-icon-advice'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24 44q-4.15 0-7.8-1.575-3.65-1.575-6.35-4.275-2.7-2.7-4.275-6.35Q4 28.15 4 24t1.575-7.8Q7.15 12.55 9.85 9.85q2.7-2.7 6.35-4.275Q19.85 4 24 4t7.8 1.575q3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24t-1.575 7.8q-1.575 3.65-4.275 6.35-2.7 2.7-6.35 4.275Q28.15 44 24 44Zm-2.15-3.05v-4.1q-1.75 0-2.95-1.3-1.2-1.3-1.2-3.05v-2.2L7.45 20.05q-.25 1-.35 1.975Q7 23 7 24q0 6.5 4.225 11.35t10.625 5.6Zm14.7-5.4q1.1-1.2 1.925-2.55.825-1.35 1.4-2.825t.85-3.025Q41 25.6 41 24q0-5.3-2.9-9.625T30.35 8.05v.9q0 1.75-1.2 3.05-1.2 1.3-2.95 1.3h-4.35v4.35q0 .85-.675 1.4-.675.55-1.525.55H15.5V24h12.9q.85 0 1.4.65.55.65.55 1.5v6.35h2.15q1.45 0 2.55.85 1.1.85 1.5 2.2Z"/></svg>
                            <div><span>Seguimiento</span> <br /> de pedido</div>
                        </div>
                    </div>    
            </div>
        }
    </>
  )
}
