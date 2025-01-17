export default interface ReviewModel { 
    id:string; 
    user_id:string; 
    product_id:string; 
    date: string; 
    rating: number; 
    review_text: string;
}