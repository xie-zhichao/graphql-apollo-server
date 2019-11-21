import BaseLoader from './baseLoader'

export default class HomeLoader extends BaseLoader {
  constructor() {
    super()
  }

  async getTopBanners() {
    return this.post('fun/homepage/top-banner/list')
  }

  async getCityList() {
    return this.post('fun/homepage/city/list')
  }
}
