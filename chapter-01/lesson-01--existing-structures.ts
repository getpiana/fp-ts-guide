describe('Existing structures', () => {
  test('Array', () => {
    // Arrays represent the concept of handling collections of
    // multiple items.

    const ax: Array<number> = [1, 2, 3];

    // In order to double the value of elements, we need to iterate
    // over them. Few methods are available:

    // 1. Using basic for loop:

    const sum = [...ax];

    for (let i = 0; i < ax.length; i++) {
      sum[i] *= 2;
    }

    expect(sum).toEqual([2, 4, 6]);

    // 2. Mapping a function x => y:

    const sumFn: (x: number) => number = x => x * 2;

    expect(ax.map(sumFn)).toEqual([2, 4, 6]);
  });

  test('Promise', async () => {
    // Promises represent the concept of handling asynchronous
    // computations that may throw.

    const px: Promise<number> = Promise.resolve(42);

    // In order to double the value of a promise, we need to await for
    // it. Few methods are available:

    // 1. Using then operator:

    const doubleFn: (x: number) => Promise<number> = x => Promise.resolve(x * 2);

    await expect(px.then(doubleFn)).resolves.toEqual(84);

    // 2. Using async/await keywords:

    expect((await px) * 2).toEqual(84);
  });
});
