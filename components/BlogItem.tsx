import React, {RefObject} from 'react';
import formatDate from './FormatDate';
import Link from 'next/link';
import { BlogItemType, CategoryType } from '../types/index';

type BlogTitleItemType = {
    items: BlogItemType;
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
            {
                'id': 'dummy',
                'createdAt': 'dummy',
                'updatedAt': 'dummy',
                'publishedAt': 'dummy',
                'revisedAt': 'dummy',
                'categoryId': 'dummy',
                'categoryName': 'dummy'
            },
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
                        {items.categories.map((category:CategoryType,i:number) => 
                        <span key={category.id} >
                            {i==0?"":"/"}
                            <Link href={`/categories/${category.categoryId}`} passHref>
                                <a href="replace" title={`クリックすると${category.categoryName}カテゴリーに飛びます。`}>{category.categoryName}</a>
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
                @media (max-width: 767px){
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