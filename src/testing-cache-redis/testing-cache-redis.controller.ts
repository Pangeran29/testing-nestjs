import { HttpService } from '@nestjs/axios';
import { CacheInterceptor, CacheKey, CacheTTL, CACHE_MANAGER, Controller, Get, Inject, Param, UseInterceptors } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { TestingCache } from './return-value/testingCache.return-value';

/** The decorator make caching enable in all get request in all controller */
// @UseInterceptors(CacheInterceptor)
@Controller('testing-cache-redis')
export class TestingCacheRedisController {
  // data: TestingCache[] = [{ name: 'jonathan', msg: 'we love ts' }];
  
  constructor(
    // @Inject(CACHE_MANAGER)
    // private readonly cacheService: Cache,
    private readonly httpService: HttpService
  ) {}

  // @Get()
  // async testingCache(): Promise<TestingCache[]> {
  //   this.data.push({ name: 'artinya apa bg messi', msg: 'artinya gada bg messi' });
    
  //   /** use this for specify a key  */
  //   await this.cacheService.set('key', 'value', 10000);
  //   const cache = await this.cacheService.get('key');
    
  //   return this.data;
  // }

  /** define cache name and expiration time */
  @Get('global-cache/:id')
  async testingCacheGlobal(@Param('id') id: string): Promise<any> {
    /** Cache data by id */
    const { data } = await this.httpService.axiosRef.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return data;
  } 
}
