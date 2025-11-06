export type Assign<T, U> = Omit<T, keyof U> & U
export type Assigns<T1, T2, T3 = never, T4 = never, T5 = never, T6 = never> = [T6] extends [never]
  ? [T5] extends [never]
    ? [T4] extends [never]
      ? [T3] extends [never]
        ? Assign<T1, T2>
        : Assign<Assign<T1, T2>, T3>
      : Assign<Assign<Assign<T1, T2>, T3>, T4>
    : Assign<Assign<Assign<Assign<T1, T2>, T3>, T4>, T5>
  : Assign<Assign<Assign<Assign<Assign<T1, T2>, T3>, T4>, T5>, T6>
export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>
