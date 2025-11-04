import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { UseFieldReturn } from '@ousia-ui/ark/utils'
import { FieldProvider } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'

interface RootProviderProps {
  value: UseFieldReturn
}

export interface FieldRootProviderBaseProps extends RootProviderProps, PolymorphicProps {}
export interface FieldRootProviderProps extends ComponentProps<'div'>, FieldRootProviderBaseProps {}

export const FieldRootProvider = (props: FieldRootProviderProps) => {
  const { ref, ...restProps } = props
  const [{ value: field }, localProps] = createSplitProps<RootProviderProps>()(restProps, ['value'])
  const mergedProps = mergeProps(field.getRootProps(), localProps)

  return (
    <FieldProvider value={field}>
      <ark.div {...mergedProps} ref={ref} />
    </FieldProvider>
  )
}
