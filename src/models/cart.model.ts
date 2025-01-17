export default interface ShoeCart {
    id: string;
    name: string;
    price: number;
    image: string[];
    category: string;
    description: string;
    stock: number;
    sizeSelected: Number;
    features: string[]; 
    items: number
}