import { useState, useEffect } from 'react';
import './History.css';

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

export const History = () => {
  const sizeWindow = WindowSize();
  return (
    <>
        { 
            sizeWindow && sizeWindow.width <=768 ? 
            <div>
                <div className='container-main'>
                <div className='container-history'>
                    <div className='form'>
                            <div className='container-history-title'>
                                <span>LA HISTORIA CONTINÚA...</span>
                                <p>SUSCRÍBETE Y ENTÉRATE DE LANZAMIENTOS EXCLUSIVOS, NUEVAS COLECCIONES Y DESCUENTOS ESPECIALES. !Recibe 15% OFF EN TU PRIMERA COMPRA!</p>
                            </div>
                            <div className='formulario'>
                                <div>
                                    <p>Nombres y apellidos</p>
                                    <hr />
                                </div>
                                <div>
                                    <p>Correo electrónico</p>
                                    <hr />
                                </div>
                                <div>
                                    <p>Celular</p>
                                    <hr />
                                </div>
                                <div>
                                    <p>Número de documento</p>
                                    <hr />
                                </div>
                            </div>
                            <div className='genero'>
                                <div>Te interesa productos para</div>
                                <div className='genero-checkbox'>
                                    <input type="checkbox" /><p className='women'>Mujer</p>
                                    <input type="checkbox" /><p>Hombre</p>
                                </div>
                            </div>
                            <div className='conditions'>
                                <div><input type="checkbox"/>Aceptas <span>Tratamiento de Datos Personales</span> y <span>Términos y Condiciones</span></div>
                                <button>SUSCRIBIRME</button>
                            </div>
                    </div>
                </div>
                <div className='image-conventions'>
                    <img src="https://moviesshopco.vteximg.com.br/arquivos/medios-de-pago-mic-footer.png" alt="" />
                </div>
            </div>
            </div>
            : 
            <div className='container-main'>
                <div className='container-history'>
                    <div className='form'>
                            <div className='container-history-title'>
                                <span>LA HISTORIA CONTINÚA...</span>
                                <p>SUSCRÍBETE Y ENTÉRATE DE LANZAMIENTOS EXCLUSIVOS, NUEVAS COLECCIONES Y DESCUENTOS ESPECIALES. !Recibe 15% OFF EN TU PRIMERA COMPRA!</p>
                            </div>
                            <div className='formulario'>
                                <div>
                                    <p>Nombres y apellidos</p>
                                </div>
                                <div>
                                    <p>Correo electrónico</p>
                                </div>
                                <div>
                                    <p>Celular</p>
                                </div>
                                <div>
                                    <p>Número de documento</p>
                                </div>
                            </div>
                            <div className='genero'>
                                <div>Te interesa productos para</div>
                                <div className='genero-checkbox'>
                                    <input type="checkbox" /><p className='women'>Mujer</p>
                                    <input type="checkbox" /><p>Hombre</p>
                                </div>
                            </div>
                            <div className='conditions'>
                                <div><input type="checkbox"/>Aceptas <span>Tratamiento de Datos Personales</span> y <span>Términos y Condiciones</span></div>
                                <button>SUSCRIBIRME</button>
                            </div>
                    </div>
                </div>
                <div className='image-conventions'>
                    <img src="https://moviesshopco.vteximg.com.br/arquivos/medios-de-pago-mic-footer.png" alt="" />
                </div>
            </div>
        }
    </>
  )
}
