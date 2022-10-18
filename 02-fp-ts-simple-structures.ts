import { Option } from 'fp-ts/Option';
import { option } from 'fp-ts';

describe('fp-ts simple structures', () => {
  test('Option', () => {
    // Options represent the concept of handling nullable items:
    // type Option<T> = None | Some<T>;

    const ox: Option<number> = option.some(1);

    // To manipulate an Option, you need to check first both variants
    // None and Some. This is called [pattern matching]. The value
    // contained in an Option can only be manipulated within the Some
    // variant. Otherwise it always return None. It acts a bit like
    // the TypeScript [optional chaining].

    let double = option.isSome(ox) ? option.some(ox.value * 2) : option.none;

    expect(double).toEqual({ _tag: 'Some', value: 2 });
  });
});

// [pattern matching]: https://en.wikipedia.org/wiki/Pattern_matching
// [optional chaining]: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#optional-chaining
