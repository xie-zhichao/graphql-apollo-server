import { RESTDataSource } from 'apollo-datasource-rest'
import { InMemoryLRUCache } from 'apollo-server-caching'

class BaseDao extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'http://h5test0.i-fun.tech/'
    this.initialize({ context: {}, cache: new InMemoryLRUCache()})
  }
}

export default BaseDao
