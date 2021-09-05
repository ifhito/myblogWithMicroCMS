import React, { ReactFragment } from 'react';

export default function Footer() {
    return(
        <footer>
            <p className="head-color">© 2021 HOTAKE</p>
            <style jsx>{`
                footer {
                    margin-top: auto;
                    text-align: center;
                }
            `}</style>
        </footer>
    );
}