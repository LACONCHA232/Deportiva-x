import { Link, useNavigate } from 'react-router-dom';
import './BurguerMenu.css';
import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';

export default function BurguerMenu() {
    const [isOpen, setOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate(); // Usa useNavigate para redirigir

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token); // Establece isLoggedIn según la existencia del token
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token'); // Elimina el token del localStorage
        localStorage.removeItem('userId'); // Elimina el userId del localStorage
        setIsLoggedIn(false);
        setOpen(false);
        navigate('/login'); // Redirige al usuario a la página de inicio de sesión
    };

    const handleScrollAndNavigate = (target) => {
        return () => {
            setOpen(false);
            navigate('/');
            setTimeout(() => {
                document.getElementById(target).scrollIntoView({ behavior: 'smooth' });
            }, 100); // Ajusta el tiempo si es necesario
        };
    };

    return (
        <>
            <div className='Containers'>
                <img className='nav-icon' src="../../../public/assets/BrandLogo-Navbar.png" alt="" onClick={() => setOpen(!isOpen)} />
                <article className={`layout ${isOpen ? 'menuOpen' : 'menuClosed'}`}>
                    <article className={`container-menu ${isOpen ? 'menuOpen' : 'menuClosed'}`}>
                        <div className='container-close'>
                            <img src="../../../public/assets/MainPage/Close-icon.png" alt="" className='btn-close-burguer' onClick={() => setOpen(false)} />
                        </div>
                        <section className='container-menu2'>
                            <img src={isLoggedIn ? "../../../public/assets/Carrito de compras/IMG_7410.WEBP" : "../../../public/assets/Brand-logo.png"} alt="" className='brandLogo-burguer' />
                            {/* {isLoggedIn && (
                                <img src="../../../public/assets/Carrito de compras/IMG_7410.WEBP" alt="" className='brandLogo-burguer' />
                            )} */}
                            {/* onClick={() => setOpen(false)} */}

                            <Link to='/' className='btn-burguer' onClick={() => setOpen(false)}>Inicio</Link>
                            <Link to='/orders' className='btn-burguer' onClick={() => setOpen(false)}>Pedidos</Link>
                            {isLoggedIn ? (
                                <ScrollLink to="wishlist" smooth={true} duration={500} className='btn-burguer' onClick={handleScrollAndNavigate('wishlist')}>Favoritos</ScrollLink>
                            ) : (
                                <Link to='/orders' className='btn-burguer' onClick={() => setOpen(false)}>Favoritos</Link>
                            )}
                            {/* <ScrollLink to="wishlist" smooth={true} duration={500} className='btn-burguer' onClick={() => setOpen(false)}>Favoritos</ScrollLink> */}
                            {/* <ScrollLink to="View" smooth={true} duration={500} className='btn-burguer' onClick={() => setOpen(false)}>Vistos</ScrollLink> */}
                            {!isLoggedIn && (
                                <Link to='/Login' className='btn-burguer'>Log In</Link>
                            )}
                            {isLoggedIn && (
                                <button className='btn-burguer log-out' onClick={handleLogout}>Log Out</button>
                            )}
                        </section>
                    </article>
                </article>
            </div>
        </>
    );
}
