// TypeScript comes with useful builtin structures:

describe('Existing TypeScript structures', () => {
  test('Array', () => {
    // Arrays represent the concept of handling collections of
    // multiple items.

    const ax: Array<number> = [1, 2, 3];

    // To manipulate an Array, you need to iterate over its
    // elements. Few methods are available:

    // Using the basic "for" loop:

    const double = [...ax];

    for (let i = 0; i < ax.length; i++) {
      double[i] *= 2;
    }

    expect(double).toEqual([2, 4, 6]);

    // Mapping a function a => b to the "map" operator:

    const doubleFn: (x: number) => number = x => x * 2;

    expect(ax.map(doubleFn)).toEqual([2, 4, 6]);
  });

  test('Promise', async () => {
    // Promises represent the concept of handling asynchronous
    // computations that may throw.

    const px: Promise<number> = Promise.resolve(1);

    // To manipulate a Promise, you need to await results and catch
    // errors. Few methods are available:

    // Using async/await (errors need to be caught with try/catch):

    expect((await px) * 2).toEqual(2);

    // Mapping a function a => b or a => Promise<b> to the "then"
    // operator (and catching errors with the "catch" operator):

    const doubleFn: (x: number) => Promise<number> = x => Promise.resolve(x * 2);

    await expect(px.then(doubleFn)).resolves.toEqual(2);
  });
});
