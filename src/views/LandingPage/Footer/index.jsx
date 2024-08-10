import { ContactLink } from './components/ContactLink';
import './style.css'

function Fotter() {
    return (
        <>
            <footer>
                <div className="footer_content">
                    <div className='footer_contactLinks container justify-center'>

                        <ContactLink link = 'instagram'>
                            <i className="fa-brands fa-instagram"></i>
                        </ContactLink>

                        <ContactLink link = 'facebook'>
                            <i className="fa-brands fa-facebook"></i>
                        </ContactLink>

                        <ContactLink link = 'whatsapp'>
                            <i className="fa-brands fa-whatsapp"></i>
                        </ContactLink>

                    </div>
                    <span>Copyright 2024 by AXDOK</span>
                </div>
            </footer>
        </>
    )
}
export { Fotter };
