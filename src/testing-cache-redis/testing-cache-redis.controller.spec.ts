import { CACHE_MANAGER } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { TestingCacheRedisController } from './testing-cache-redis.controller';

/** FAIL UNI TEST */

const mockCacheManager = {
  set: jest.fn(),
  get: jest.fn(),
  del: jest.fn(),
  reset: jest.fn(),
}

describe('TestingCacheRedisController', () => {
  let controller: TestingCacheRedisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [TestingCacheRedisController],
      providers: [{
        provide: CACHE_MANAGER,
        useValue: mockCacheManager
      }]
    }).compile();


    controller = module.get<TestingCacheRedisController>(TestingCacheRedisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
