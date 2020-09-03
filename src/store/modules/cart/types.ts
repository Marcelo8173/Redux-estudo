export interface IProduct{
    id: number;
    title: string;
    price: number;
}

export interface ICartItem{
    produto: IProduct;
    quantidade: number;
}

export interface ICartState{
    items: ICartItem[];
}