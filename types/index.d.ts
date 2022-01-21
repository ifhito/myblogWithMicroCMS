import React, { RefObject} from 'react';

export type CategoryType={
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    categoryId: string;
    categoryName: string;
}
export type BlogItemType = {
    id: 'string';
    createdAt: 'string';
    updatedAt: 'string';
    publishedAt: 'string';
    revisedAt: 'string';
    title: 'string';
    date: 'string';
    content: 'string'
    categories: CategoryType[];
}
// export type SubCategoryType = {
//     categoryId:string;
//     categoryName:string;
// };
// export type ContentsType = {
//     id: 'string';
//     createdAt: 'string';
//     updatedAt: 'string';
//     publishedAt: 'string';
//     revisedAt: 'string';
//     title: 'string';
//     date: 'string';
//     content: 'string'
//     categories: SubCategoryType[];
// }


