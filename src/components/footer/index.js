import { StyleFooter } from "./style";

function Footer () {
    return (
        <StyleFooter>
            {/* <div className="logo">
                <h1><span className="title">GW</span> <span className="sub">j<i class="fa-regular fa-gem"></i>ias</span></h1>
            </div> */}
            <div className="info">
                <div className="contact">
                    <span>
                        <i className="fa-solid fa-phone"></i>
                        (77) - 9986-59811
                    </span>
                    <span>
                        <i className="fa-solid fa-envelope"></i>
                        GWjoias@gmail.com
                    </span>
                </div>
                <div className="sociais">
                        <a href="https://wa.me/5577991505805" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-whatsapp"></i>
                        </a>
                        <a href="https://www.instagram.com/gwjoiasss_/" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                    </div>
            </div>
            <address>
                <p >
                    <i className="fa-solid fa-location-dot space"></i>
                    Praça 6 de outubro Livramento de Ns. - Bahia
                </p>
                <p>46140-000</p>
            </address>
        </StyleFooter>
    )
}

export default Footer