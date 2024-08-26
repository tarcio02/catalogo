import { useState } from "react";
import { StyleWhatsapp } from "./style";
import whatsapp from "../../image/WhatsApp_Logo.png"

function Whatsapp (){
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return(
        <>
        {isVisible && (
                <StyleWhatsapp>
                    <button onClick={toggleVisibility}><i className="fa-solid fa-x"></i></button>
                    <a href="https://wa.me/5577991505805" target="_blank" rel="noopener noreferrer">
                        <img src={whatsapp} alt="ìcone whatsapp"></img>
                    </a>
                </StyleWhatsapp>
        )}
        </>
    )
};

export default Whatsapp