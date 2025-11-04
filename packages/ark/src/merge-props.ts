import { callAll } from "@zag-js/utils";

interface Props {
  [key: string]: any;
}

type TupleTypes<T extends any[]> = T[number];

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never;

const clsx = (...args: (string | undefined)[]): string => {
  let result = ''
  for (let i = 0; i < args.length; i++) {
    const arg = args[i]
    if (arg) {
      result += (result ? ' ' : '') + arg
    }
  }
  return result
}

/**
 * Merges multiple prop objects with special handling for event handlers, className, and style.
 *
 * @param args - Variable number of prop objects to merge
 */
export function mergeProps<T extends Props>(
  ...args: Array<T | undefined>
): UnionToIntersection<TupleTypes<T[]>> {
  let result: Props = {};

  for (const props of args) {
    if (!props) continue;

    for (const propName in props) {
      const resultValue = result[propName];
      const propsValue = props[propName];

      // Event handlers: chain both (on[A-Z] pattern)
      if (
        propName.length > 2 &&
        propName[0] === "o" &&
        propName[1] === "n" &&
        propName.charCodeAt(2) >= 65 &&
        propName.charCodeAt(2) <= 90 &&
        typeof resultValue === "function" &&
        typeof propsValue === "function"
      ) {
        result[propName] = callAll(propsValue, resultValue);
      }
      // className: concatenate
      else if (propName === "className") {
        result[propName] = clsx(resultValue, propsValue);
      }
      // style: shallow merge if both are objects
      else if (propName === "style") {
        if (
          resultValue &&
          propsValue &&
          typeof resultValue === "object" &&
          typeof propsValue === "object"
        ) {
          result[propName] = { ...resultValue, ...propsValue };
        } else {
          result[propName] =
            propsValue !== undefined ? propsValue : resultValue;
        }
      }
      // Other props: override wins, preserve result if props value is undefined
      else {
        result[propName] = propsValue !== undefined ? propsValue : resultValue;
      }
    }
  }

  return result as any;
}
