import type { Assign } from '@ousia-ui/ark'
import {
  type ComponentPropsWithRef,
  type ComponentType,
  type ElementType,
  createContext,
  useContext,
} from 'react'
import { cx } from 'styled-system/css'
import { type StyledComponent, isCssProperty, styled } from 'styled-system/jsx'
import type { HTMLStyledProps } from 'styled-system/types'

type Props = Record<string, unknown>
type Recipe = {
  (props?: Props): Props
  splitVariantProps: (props: Props) => [Props, Props]
}
type Slot<R extends Recipe> = keyof ReturnType<R>
type Options = { forwardProps?: string[] }

const shouldForwardProp = (prop: string, variantKeys: string[], options: Options = {}) =>
  options.forwardProps?.includes(prop) || (!variantKeys.includes(prop) && !isCssProperty(prop))

export const createStyleContext = <R extends Recipe>(recipe: R) => {
  const StyleContext = createContext<Record<Slot<R>, string> | null>(null)

  const withRootProvider = <P extends Record<string, unknown>>(Component: ElementType) => {
    const StyledComponent = (props: P) => {
      const [variantProps, otherProps] = recipe.splitVariantProps(props)
      const slotStyles = recipe(variantProps) as Record<Slot<R>, string>

      return (
        <StyleContext.Provider value={slotStyles}>
          <Component {...otherProps} />
        </StyleContext.Provider>
      )
    }
    return StyledComponent
  }

  const withProvider = <E extends ElementType, P extends object = Record<string, never>>(
    Component: ElementType,
    slot: Slot<R>,
    options?: Options,
  ): ComponentType<Assign<HTMLStyledProps<E>, P>> => {
    const StyledComponent = styled(
      Component,
      {},
      {
        shouldForwardProp: (prop, variantKeys) => shouldForwardProp(prop, variantKeys, options),
      },
    ) as StyledComponent<ElementType>
    const StyledSlotProvider = (
      props: Assign<HTMLStyledProps<E>, P> & {
        ref?: ComponentPropsWithRef<E>['ref']
        className?: string
      },
    ) => {
      const { ref, ...restProps } = props
      const [variantProps, otherProps] = recipe.splitVariantProps(restProps)
      const slotStyles = recipe(variantProps) as Record<Slot<R>, string>

      return (
        <StyleContext.Provider value={slotStyles}>
          <StyledComponent
            {...otherProps}
            ref={ref}
            className={cx(slotStyles?.[slot], props.className)}
          />
        </StyleContext.Provider>
      )
    }
    // @ts-expect-error
    StyledSlotProvider.displayName = Component.displayName || Component.name

    return StyledSlotProvider
  }

  const withContext = <E extends ElementType, P extends object = Record<string, never>>(
    Component: ElementType,
    slot: Slot<R>,
  ): ComponentType<Assign<HTMLStyledProps<E>, P>> => {
    const StyledComponent = styled(Component)
    const StyledSlotComponent = (
      props: Assign<HTMLStyledProps<E>, P> & {
        ref?: ComponentPropsWithRef<E>['ref']
        className?: string
      },
    ) => {
      const slotStyles = useContext(StyleContext)
      return <StyledComponent {...props} className={cx(slotStyles?.[slot], props.className)} />
    }
    // @ts-expect-error
    StyledSlotComponent.displayName = Component.displayName || Component.name

    return StyledSlotComponent
  }

  return {
    withRootProvider,
    withProvider,
    withContext,
  }
}
