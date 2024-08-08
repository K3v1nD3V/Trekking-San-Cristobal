import React, { useEffect } from 'react';
import Button from '../../../components/Button';
import './styles.css';


function Header() {
    const [menuState, setMenuState] = React.useState(false);
    
    function menuStateHandler() {
        setMenuState(prevState => !prevState);
    }

    useEffect(() => {
        if (menuState) {
            console.log('open');
        }else{
            console.log('close');
        }
    }, [menuState])

    return (
        <>
            <header>
                <div className="nav-bar flex-container container">
                    <div className='nav-bar_logo-container flex-container '>
                        <a href="/">
                            <img src="/IMG_0084.PNG" alt="Logo de Trakking San Cristobal" />
                        </a>
                    </div>
                    <nav>
                        <i 
                            className="fa-solid fa-bars"
                            onClick={() => menuStateHandler()}
                        ></i>
                    </nav>
                </div>
                <div className='hero'>
                    <div className='hero_content flex-container container'>
                        <div className='hero_content_text'>
                            <h1>Trakking</h1>
                            <p>Y tú ¿Ya viviste el turismo creativo?</p>
                        </div>
                        <div className='hero_content_action'>
                            <Button
                                class = 'button-cta'
                                text = 'Accion'
                            />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export { Header };