import { Store } from './main'
import { baseUnsplashURL } from '../constants'
import { Product } from '../structure/models'

interface App extends Object {
  products: undefined
  /* Navigation */
  productType: string
  shoppingcart: Array<Product>
}

class AppStore extends Store<App> {
  protected data(): App {
    return {
      products: undefined,

      /* Filters */
      productType: '',
      shoppingcart: new Array<Product>(),
    }
  }

  /* Initialze store */
  populateStore() {
    return new Promise(resolve => {
      resolve()
    })
  }

  // Getters
  baseUnsplashURL(width: number, height: number, query: string) {
    return `${baseUnsplashURL}/${width}x${height}/?${query}`
  }

  getProductType(): string {
    return this.getState().productType
  }

  // Setters
  setProductType(productType: string) {
    this.state.productType = productType
  }
}

export const appStore: AppStore = new AppStore()
