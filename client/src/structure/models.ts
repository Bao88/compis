export enum Headers {
  Produkter = 'Produkter',
  'Shopping bag' = 'Shopping bag',
  'Logg inn' = 'Logg inn',
}

export enum ProductType {}

export interface SliderComponentData {
  title: string
  subtitle: string
  imgUrl: string
  alt: string
}

export interface BoxComponentData {
  title: string
  subtitle: string
  imgUrl: string
  srcset: string[]
  alt: string
}

export interface ProductData {
  name: string
  price: string
  description: string
  type: string
}

export class Product {
  name: string
  price: string
  description: string
  type: string

  constructor(product: ProductData) {
    this.name = product.name
    this.price = product.price
    this.description = product.description
    this.type = product.type
  }
}
