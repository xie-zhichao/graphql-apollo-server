import HomeDao from '../../dao/fun-app/HomeDao'

const homeDao = new HomeDao()

export async function getHomePageDatas() {
  const topBanners = await homeDao.getTopBanners()
  const cityList = await homeDao.getCityList()

  return {
    topBanners,
    cityList
  }
}
