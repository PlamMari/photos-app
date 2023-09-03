import { PrettyPhotoPipe } from './pretty-photo.pipe';

describe('PrettyPhotoPipe', () => {
  it('create an instance', () => {
    const pipe = new PrettyPhotoPipe();
    expect(pipe).toBeTruthy();
  });
});
