import { StrategyModule } from './strategy.module';

describe('PushStrategyModule', () => {
  let strategyModule: StrategyModule;

  beforeEach(() => {
    strategyModule = new StrategyModule();
  });

  it('should create an instance', () => {
    expect(strategyModule).toBeTruthy();
  });
});
