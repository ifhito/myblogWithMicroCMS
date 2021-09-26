import React, { ReactFragment } from 'react';

export default function Footer() {
    return(
        <footer>
            <p id="footer-text">© 2021 HOTAKE</p>
            <style jsx>{`
                footer {
                    text-align: center;
                    margin-top: auto;
                }
                #footer-text {
                    margin-top: 10rem;
                    margin-bottom: 5rem;
                    color: #2196F3;
                }
            `}</style>
        </footer>
    );
}