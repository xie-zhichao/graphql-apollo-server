import TopLoader from '../../loader/http/topLoader'

const homeDao = new TopLoader()

export async function getHomePageDatas() {
  const topBanners = await homeDao.getTopBanners()
  const cityList = await homeDao.getCityList()

  return {
    topBanners,
    cityList
  }
}
