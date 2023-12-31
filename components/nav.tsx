import React from "react";
import Link from "next/link";

const Nav: React.FC = () => {
    const links:{pass:string,text:string}[] = [{'pass':'/','text':'HOME'},{'pass':'/about','text':'ABOUT'}, {'pass':'/link','text':'LINK'}]
    return (
        <ul id="link-container">
            {links.map((item,i)=>{
                return(
                <li key={i}>
                    <Link href={item.pass} passHref>
                        <a href="replace" className="link space-2">
                            {item.text}
                        </a>
                    </Link>
                </li>
                );
            })}
            <style jsx>{`
                .link {
                    color: #2196F3;
                    margin: 10rem;
                    width: 10%;
                }
                #link-container {
                    display: flex;
                    justify-content: space-evenly;
                    text-align: center;
                    margin-bottom: 3rem;
                    list-style: none;
                    padding-left: 0;
                }
                @media (max-width: 767px){
                    .link {
                        margin: 2rem;
                    }
                    .space-5 {
                        letter-spacing: 1rem;
                    }
                    .space-2 {
                        letter-spacing: 0.5rem;
                    }
                }
                
            `}</style>     
        </ul>
    )
}

export default Nav;

