import { IBaseDomain } from 'src/app/webservice/base.webservice';

export interface IPet extends IBaseDomain {
    category: ICategory;
    name: string;
    photoUrls: string[];
    tags: ITag[];
    status: string;
}

export interface ICategory extends IBaseDomain {
    name: string;
}

export interface ITag extends IBaseDomain {
    name: string;
}
