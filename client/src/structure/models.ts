

export interface SliderComponentData {
  title: String
  subtitle: String
  imgUrl: String
  alt: String
}

export interface BoxComponentData {
  title: String
  subtitle: String
  imgUrl: String
  alt: String
}

interface ProductData {
  productName: string
}

export class Product {
  productName: string

  constructor(product: productData) {}
}
