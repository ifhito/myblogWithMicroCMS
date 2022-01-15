import React, { RefObject} from 'react';
import formatDate from '../components/FormatDate'
import Link from 'next/link'
type BlogItemType = {
    items: any;
    innerRef: RefObject<HTMLAnchorElement> | undefined;
}
  
const BlogItem: React.FC<BlogItemType> = props => {
const item = props.items;
const ref = props.innerRef;
return (
        <>
            <li id="page-li" className="content-color">
            <h2>
                <Link href="/blogs/[id]" as={`/blogs/${item.id}`} passHref>
                <a ref={ref} href="replace" className="content-color link-border-none">
                    { item.title }
                </a>
                </Link>
            </h2>
            <span id="date" className="content-color">{ formatDate(item.date) }</span>
            </li>
            <style jsx global>{`
            h2 {
                margin:0;
                border-bottom: 3px solid;
                line-height: 1.5;
            }
            a {
                width:100%;
            }
            #page-li {
                margin-bottom: 2.4rem;
            }
            @media (max-width: 767px){
                // #date {
                //   font-size: 20px
                // }
                // h2 {
                //   margin:0;
                //   font-size: 50px;
                // }
            }
            `}</style>
        </>
)
};

export default BlogItem;