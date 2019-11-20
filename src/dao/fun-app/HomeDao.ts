import BaseDao from './baseDao'

export default class HomeDao extends BaseDao {
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
