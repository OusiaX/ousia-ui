import { callAll } from '@zag-js/utils'

type MergeableProps = Record<string, any>

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
 * Merges two prop objects with special handling for event handlers, className, and style.
 *
 * @param slotProps - Base props from component
 * @param childProps - Override props from user
 */
export function mergeProps<T extends MergeableProps, U extends MergeableProps>(
  slotProps: T | undefined,
  childProps: U | undefined,
): T & U {
  if (!slotProps) return (childProps ?? {}) as T & U
  if (!childProps) return slotProps as T & U

  const result: MergeableProps = { ...slotProps }

  for (const propName in childProps) {
    const baseValue = slotProps[propName]
    const overrideValue = childProps[propName]

    // Event handlers: chain both (on[A-Z] pattern)
    if (
      propName.length > 2 &&
      propName[0] === 'o' &&
      propName[1] === 'n' &&
      propName.charCodeAt(2) >= 65 &&
      propName.charCodeAt(2) <= 90 &&
      typeof baseValue === 'function' &&
      typeof overrideValue === 'function'
    ) {
      result[propName] = callAll(overrideValue, baseValue)
    }
    // className: concatenate
    else if (propName === 'className') {
      result[propName] = clsx(baseValue, overrideValue)
    }
    // style: shallow merge if both are objects
    else if (propName === 'style') {
      if (
        baseValue &&
        overrideValue &&
        typeof baseValue === 'object' &&
        typeof overrideValue === 'object'
      ) {
        result[propName] = { ...baseValue, ...overrideValue }
      } else {
        result[propName] = overrideValue !== undefined ? overrideValue : baseValue
      }
    }
    // Other props: override wins, preserve base if override is undefined
    else {
      result[propName] = overrideValue !== undefined ? overrideValue : baseValue
    }
  }

  return result as T & U
}
