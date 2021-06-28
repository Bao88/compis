import { Store } from './main'
import {} from '../structure/models'

interface App extends Object {
  products: undefined
  /* Navigation */
  navigationBackgroundIsDark: boolean
}

class AppStore extends Store<App> {
  protected data(): App {
    return {
      products: undefined,
      /* Navigation */
      navigationBackgroundIsDark: false,
    }
  }

  /* Initialze store */
  populateStore() {
    return new Promise(resolve => {
      resolve()
    })
  }

  /* Navigation */
  setNavigationBackgroundIsDark(isDark: boolean): void {
    this.state.navigationBackgroundIsDark = isDark
  }

  getNavigationBackgroundIsDark(): boolean {
    return this.state.navigationBackgroundIsDark
  }
}

export const appStore: AppStore = new AppStore()
