import { Test, TestingModule } from '@nestjs/testing';
import { TestingTypeormController } from './testing-typeorm.controller';

describe('TestingTypeormController', () => {
  let controller: TestingTypeormController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestingTypeormController],
    }).compile();

    controller = module.get<TestingTypeormController>(TestingTypeormController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
