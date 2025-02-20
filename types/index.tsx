import images from "@/constants/images";

export type Promotion = {
  id: string;
  imageKey: keyof typeof images; // This ensures TypeScript knows it's a valid image key
}

export type Product= {
  id: string;
  name:string;
  image:any // This ensures TypeScript knows it's a valid image key
}

export default Promotion