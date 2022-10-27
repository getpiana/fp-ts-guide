import { Option } from 'fp-ts/Option';
import { either, option, task } from 'fp-ts';
import { Either } from 'fp-ts/Either';
import { Task } from 'fp-ts/Task';

describe('fp-ts simple structures', () => {
  test('Option', () => {
    // Options represent the concept of handling nullable items:

    // type Option<A> = None | Some<A>
    // type None = { _tag: "None" }
    // type Some<A> = { _tag: "Some", value: A }

    const a = { _tag: 'Some', value: 1 } as Option<number>;

    // To manipulate an Option, you need to check first both variants
    // None and Some. This is called [pattern matching]. The value
    // contained in an Option can only be manipulated within the Some
    // variant. Otherwise it always return None. It acts a bit like
    // the TypeScript [optional chaining].
    //
    // [pattern matching]: https://en.wikipedia.org/wiki/Pattern_matching
    // [optional chaining]: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#optional-chaining

    const b: Option<number> =
      a._tag === 'Some' ? { _tag: 'Some', value: a.value * 2 } : { _tag: 'None' };

    expect(b).toEqual({ _tag: 'Some', value: 2 });
  });

  test('Either', () => {
    // Eithers represent the concept of handling computations that may
    // fail:

    // type Either<E, A> = Left<E> | Right<A>
    // type Right<A> = { _tag: "Right", right: A }
    // type Left<E> = { _tag: "Left", left: E }

    const a = { _tag: 'Right', right: 1 } as Either<Error, number>;

    // To manipulate an Either, you need to check first both variants
    // Left and Right, like with Option.

    const b: Either<Error, number> =
      a._tag === 'Right' ? { _tag: 'Right', right: a.right * 2 } : { _tag: 'Left', left: a.left };

    expect(b).toEqual({ _tag: 'Right', right: 2 });
  });

  test('Task', async () => {
    // Tasks represent the concept of handling lazy async computations
    // that never fail:

    // type Task<T> = () => Promise<T>

    const a: Task<number> = () => Promise.resolve(1);

    // To manipulate a Task, you need first to trigger the function,
    // then await for the result (like a Promise):

    const b: Task<number> = () => a().then(x => x * 2);

    await expect(b()).resolves.toEqual(2);
  });
});
