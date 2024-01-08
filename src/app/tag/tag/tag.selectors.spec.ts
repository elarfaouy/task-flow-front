import * as fromTag from './tag.reducer';
import { selectTagState } from './tag.selectors';

describe('Tag Selectors', () => {
  it('should select the feature state', () => {
    const result = selectTagState({
      [fromTag.tagFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
