import { Store } from './main'
import { baseUnsplashURL } from '../constants'
import {} from '../structure/models'

interface App extends Object {
  products: undefined
  /* Navigation */
  productType: string
}

class AppStore extends Store<App> {
  protected data(): App {
    return {
      products: undefined,

      /* Filters */
      productType: '',
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

  // Setters
  setProductType(productType: string) {
    this.state.productType = productType
    console.log(productType)
  }
}

export const appStore: AppStore = new AppStore()
