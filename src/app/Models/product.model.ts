export interface Product {
    id: number;
    title: string;//consider changeing to 'brand'
    price: number;    
    description_and_reviews: string;//will need to update the database
    category: string;
    //size: string;
    image: string;// this needs to be addded to the database
  }