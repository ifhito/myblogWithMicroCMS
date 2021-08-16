import React, { ReactFragment } from 'react';
import Link from "next/link";
const Link_: ReactFragment = () => {
  return (
      <>
        <h1>その他リンク</h1>
        <a>
            <h2>
                <Link href="https://twitter.com/ifhito" passHref>
                    Twitter
                </Link>
            </h2>
        </a>
        <a>
            <h2>
                <Link href="https://note.com/ifhito" passHref>
                    Note
                </Link>
            </h2>
        </a>
        <a>
            <h2>
                <Link href="https://github.com/ifhito" passHref>
                    Github
                </Link>
            </h2>
        </a>
        <a>
            <h2>
                <Link href="https://zenn.dev/ifhito" passHref>
                    Zenn
                </Link>
            </h2>
        </a>
        <a>
            <h2>
                <Link href="https://bookmeter.com/users/991028" passHref>
                    読書メーター
                </Link>
            </h2>
        </a>
    </>
  )
}

export default Link_;