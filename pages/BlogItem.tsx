import React, { CSSProperties, RefObject} from 'react';
import formatDate from '../components/FormatDate';
import Link from 'next/link';
type BlogTitleItemType = {
    items: any;
    innerRef: RefObject<HTMLAnchorElement> | undefined;
}
  
const BlogItem: React.FC<BlogTitleItemType> = ({
    items={
        id: 'dummy',
        createdAt: 'dummy',
        updatedAt: 'dummy',
        publishedAt: 'dummy',
        revisedAt: 'dummy',
        title: 'dummy',
        date: 'dummy',
        content: 'dummy',
        categories:[
            {'categoryId':'dummy', 'categoryName':'dummy'},
        ]
    }, 
    innerRef=undefined
}) => {
    return (
            <>
                <li key={items.id} id="page-li" className="content-color">
                <h2>
                    <Link href="/blogs/[id]" as={`/blogs/${items.id}`} passHref>
                        <a ref={innerRef} href="replace" className="content-color link-border-none">
                            { items.title }
                        </a>
                    </Link>
                </h2>
                <div id="sub-data" className="sub-data">
                    <span id="date" className="content-color">{ formatDate(items.date) }</span>
                    <span id="categories" className="categories">
                        Categories：
                        {items.categories.map((category:any, i:number) => 
                        <span key={category.id} >
                            {i==0?"":"/"}
                            <Link href={`/categories/${category.categoryId}`} passHref>
                                <a href="replace" title={`クリックすると${category.categoryName}カテゴリーに飛びます。`} className='button-to-link'>{category.categoryName}</a>
                            </Link>
                        </span>
                        )}
                    </span>
                </div>
                </li>
                <style jsx>{`
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
                .sub-data {
                    display:flex;
                    justify-content: space-between;
                }
                .button-to-link {
                    background: none!important;
                    border: none;
                    padding: 0!important;
                    /*optional*/
                    font-family: arial, sans-serif;
                    /*input has OS specific font-family*/
                    color: #069;
                    text-decoration: underline;
                    cursor: pointer;
                    font-size: 1.6rem;
                }
                @media (max-width: 767px){
                    // #date {
                    //   font-size: 20px
                    // }
                    // h2 {
                    //   margin:0;
                    //   font-size: 50px;
                    // }
                    .sub-data {
                        display:flex;
                        flex-direction: column;
                    }
                }
                `}</style>
            </>
    )
};

export default BlogItem;