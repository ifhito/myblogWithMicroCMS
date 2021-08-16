import React, { ReactFragment } from 'react';
import Link from "next/link";
const Link_: ReactFragment = () => {
  return (
      <>
        <h1 className="head-color">その他リンク</h1>
        <ul>
            <li>
                <Link href="https://twitter.com/ifhito" passHref>
                <a className="content-color">Twitter</a>
                </Link>
            </li>
            <li>
                <Link href="https://note.com/ifhito" passHref>
                <a className="content-color">Note</a>
                </Link>
            </li>
            <li>
                <Link href="https://github.com/ifhito" passHref>
                    <a className="content-color">Github</a>
                </Link>
            </li>
            <li>
                <Link href="https://zenn.dev/ifhito" passHref>
                    <a className="content-color">Zenn</a>
                </Link>
            </li>
            <li>
                <Link href="https://bookmeter.com/users/991028" passHref>
                    <a className="content-color">読書メーター</a>
                </Link>
            </li>
        </ul>
    </>
  )
}

export default Link_;