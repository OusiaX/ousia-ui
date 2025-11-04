import type React from 'react'
import {
  Children,
  type ComponentPropsWithoutRef,
  type JSX,
  cloneElement,
  createElement,
  isValidElement,
} from 'react'
import { mergeProps } from './merge-props'
import { composeRefs } from './utils/compose-refs'

export interface PolymorphicProps {
  /**
   * Use the provided child element as the default rendered element, combining their props and behavior.
   */
  asChild?: boolean | undefined
}

type JsxElements = { [E in keyof JSX.IntrinsicElements]: ArkComponent<E> }
type ArkComponent<T extends keyof JSX.IntrinsicElements> = React.FC<
  JSX.IntrinsicElements[T] & PolymorphicProps
>
type ArkPropsWithRef<E extends React.ElementType> = React.ComponentPropsWithRef<E> &
  PolymorphicProps

// In React 19, ref is always a regular prop
function getRef<T = unknown>(element: React.ReactElement) {
  return (element.props as { ref?: React.Ref<T> }).ref
}

const withAsChild = (Component: React.ElementType) => {
  const Comp = (props: ArkPropsWithRef<typeof Component>) => {
    if (!props.asChild) {
      return createElement(Component, props)
    }

    const { asChild, children, ref, ...restProps } = props

    if (!isValidElement<Record<string, unknown>>(children)) {
      return null
    }

    const onlyChild: React.ReactElement<Record<string, unknown>> = Children.only(children)

    const childRef = getRef(onlyChild)
    const { ref: _, ...childPropsWithoutRef } = onlyChild.props

    return cloneElement(onlyChild, {
      ...mergeProps(restProps, childPropsWithoutRef),
      ref: ref ? composeRefs(ref, childRef) : childRef,
    })
  }

  // @ts-expect-error - it exists
  Comp.displayName = Component.displayName || Component.name

  return Comp
}

export type HTMLProps<T extends keyof JSX.IntrinsicElements> = ComponentPropsWithoutRef<T>

export const jsxFactory = () => {
  const cache = new Map()

  return new Proxy(withAsChild, {
    apply(_target, _thisArg, argArray) {
      return withAsChild(argArray[0])
    },
    get(_, element) {
      const asElement = element as React.ElementType
      if (!cache.has(asElement)) {
        cache.set(asElement, withAsChild(asElement))
      }
      return cache.get(asElement)
    },
  }) as unknown as JsxElements
}

export const ark = jsxFactory()
