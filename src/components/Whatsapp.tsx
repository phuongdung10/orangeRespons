import React from 'react';
import "../myStyle/styleHeader.css";

let url12 = `${process.env.PUBLIC_URL}/assets/Vector26.png`;
let url13 = `${process.env.PUBLIC_URL}/assets/Vector27.png`;


function Whatsapp() {
    return (


        <div className='logo_header2'>
            <div className='icon_header2'>
                <i>
                    <img src={url13} />
                </i>
                <i>
                    <img className='logo1_header2' src={url12} />
                </i>

            </div>
        </div>
    )
}
export default Whatsapp;

