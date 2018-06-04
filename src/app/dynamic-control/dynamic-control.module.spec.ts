import { DynamicControlModule } from './dynamic-control.module';

describe('DynamicControlModule', () => {
  let dynamicControlModule: DynamicControlModule;

  beforeEach(() => {
    dynamicControlModule = new DynamicControlModule();
  });

  it('should create an instance', () => {
    expect(dynamicControlModule).toBeTruthy();
  });
});
