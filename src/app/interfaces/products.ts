import { IUser } from "./user";

export interface IProduct {
    title: string,
    description: string,
    imageUrl: string,
    location: any,
    price: number,
    manufacturer: IUser
}