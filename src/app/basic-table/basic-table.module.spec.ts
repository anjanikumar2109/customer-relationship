import { BasicTableModule } from './basic-table.module';

describe('BasicTableModule', () => {
  let basicTableModule: BasicTableModule;

  beforeEach(() => {
    basicTableModule = new BasicTableModule();
  });

  it('should create an instance', () => {
    expect(basicTableModule).toBeTruthy();
  });
});
