// Do not replace with '@zag-js/react'
import { mergeProps } from '@zag-js/core'
import type React from 'react'
import {
  Children,
  type ComponentPropsWithoutRef,
  type JSX,
  cloneElement,
  createElement,
  forwardRef,
  isValidElement,
  memo,
} from 'react'
import { composeRefs } from './utils/compose-refs'

export interface PolymorphicProps {
  /**
   * Use the provided child element as the default rendered element, combining their props and behavior.
   */
  asChild?: boolean | undefined
}

type IntrinsicElementProps<T extends keyof JSX.IntrinsicElements> = JSX.IntrinsicElements[T]
type ArkComponent<T extends keyof JSX.IntrinsicElements> = React.ForwardRefExoticComponent<
  IntrinsicElementProps<T> & PolymorphicProps & React.RefAttributes<any>
>
type SimpleComponent<T extends keyof JSX.IntrinsicElements> = React.ForwardRefExoticComponent<
  IntrinsicElementProps<T> & React.RefAttributes<any>
>

type JsxElements = { [E in keyof JSX.IntrinsicElements]: ArkComponent<E> }
type SimpleElements = { [E in keyof JSX.IntrinsicElements]: SimpleComponent<E> }

type ArkPropsWithRef<E extends React.ElementType> = React.ComponentPropsWithRef<E> & PolymorphicProps

// Credits to the Radix team
function getRef(element: React.ReactElement) {
  type ElementWithRef = React.ReactElement & { ref?: React.Ref<unknown> }
  type PropsWithRef = { ref?: React.Ref<unknown> }

  // React <=18 in DEV
  let getter = Object.getOwnPropertyDescriptor(element.props, 'ref')?.get
  let mayWarn = getter && 'isReactWarning' in getter && getter.isReactWarning
  if (mayWarn) {
    return (element as ElementWithRef).ref
  }

  // React 19 in DEV
  getter = Object.getOwnPropertyDescriptor(element, 'ref')?.get
  mayWarn = getter && 'isReactWarning' in getter && getter.isReactWarning
  if (mayWarn) {
    return (element.props as PropsWithRef).ref
  }

  return (element.props as PropsWithRef).ref || (element as ElementWithRef).ref
}

const withAsChild = (Component: React.ElementType, shouldMemoize = false) => {
  const ComponentImpl = forwardRef<unknown, ArkPropsWithRef<typeof Component>>((props, ref) => {
    if (!props['asChild']) {
      return createElement(Component, { ...props, ref }, props['children'])
    }

    const { asChild, children, ...restProps } = props

    if (!isValidElement<Record<string, unknown>>(children)) {
      return null
    }

    const onlyChild: React.ReactElement<Record<string, unknown>> = Children.only(children)
    const childRef = getRef(onlyChild)

    return cloneElement(onlyChild, {
      ...mergeProps(restProps, onlyChild.props),
      ref: ref ? composeRefs(ref, childRef) : childRef,
    })
  })

  const Comp = shouldMemoize ? memo(ComponentImpl) : ComponentImpl

  const componentWithName = Component as { displayName?: string; name?: string }
  Comp.displayName = componentWithName.displayName || componentWithName.name || 'Component'

  return Comp
}

export type HTMLProps<T extends keyof JSX.IntrinsicElements> = ComponentPropsWithoutRef<T>
export type HTMLArkProps<T extends keyof JSX.IntrinsicElements> = HTMLProps<T> & PolymorphicProps

const createSimpleComponent = (Component: React.ElementType) => {
  const Comp = forwardRef<unknown, React.ComponentPropsWithRef<typeof Component>>((props, ref) => {
    return createElement(Component, { ...props, ref })
  })

  const componentWithName = Component as { displayName?: string; name?: string }
  Comp.displayName = componentWithName.displayName || componentWithName.name || 'Component'

  return Comp
}

export const jsxFactory = (): JsxElements => {
  return new Proxy(withAsChild, {
    apply(_target, _thisArg, argArray: [React.ElementType]) {
      return withAsChild(argArray[0], false)
    },
    get(_, element: string | symbol) {
      if (typeof element === 'string') {
        const asElement = element as keyof JSX.IntrinsicElements
        return withAsChild(asElement, false)
      }
      return undefined
    },
  }) as unknown as JsxElements
}

export const simpleFactory = (): SimpleElements => {
  return new Proxy(createSimpleComponent, {
    apply(_target, _thisArg, argArray: [React.ElementType]) {
      return createSimpleComponent(argArray[0])
    },
    get(_, element: string | symbol) {
      if (typeof element === 'string') {
        const asElement = element as keyof JSX.IntrinsicElements
        return createSimpleComponent(asElement)
      }
      return undefined
    },
  }) as unknown as SimpleElements
}

export const memoizedFactory = (): JsxElements => {
  return new Proxy(withAsChild, {
    apply(_target, _thisArg, argArray: [React.ElementType]) {
      return withAsChild(argArray[0], true)
    },
    get(_, element: string | symbol) {
      if (typeof element === 'string') {
        const asElement = element as keyof JSX.IntrinsicElements
        return withAsChild(asElement, true)
      }
      return undefined
    },
  }) as unknown as JsxElements
}

export const ark = jsxFactory()
export const arkSimple = simpleFactory()
export const arkMemo = memoizedFactory()
