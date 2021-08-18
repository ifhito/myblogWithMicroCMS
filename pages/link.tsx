import React, { ReactFragment } from 'react';
import Link from "next/link";
const Link_: ReactFragment = () => {
    const urls = ['https://twitter.com/ifhito', 'https://note.com/ifhito', 'https://github.com/ifhito', 'https://zenn.dev/ifhito', 'https://bookmeter.com/users/991028']
    return (
        <>
            <h1 className="head-color">その他リンク</h1>
            <ul>
                {urls.map(url => (
                    <li key={url.split('.')[0].split('//')[1]}>
                        <Link href={url} passHref>
                            <a className="content-color">{url.split('.')[0].split('//')[1]}</a>
                        </Link>
                    </li>
                ))}
            </ul>
            <style jsx global>{`
                li {
                    margin-bottom: 20px;
                }
            `}</style>
        </>
    )
}

export default Link_;