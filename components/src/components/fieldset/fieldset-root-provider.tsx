import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { FieldsetProvider, type UseFieldsetReturn, createSplitProps } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'

interface RootProviderProps {
  value: UseFieldsetReturn
}

export interface FieldsetRootProviderBaseProps extends RootProviderProps, PolymorphicProps {}
export interface FieldsetRootProviderProps
  extends ComponentProps<'fieldset'>,
    FieldsetRootProviderBaseProps {}

export const FieldsetRootProvider = (props: FieldsetRootProviderProps) => {
  const { ref, ...restProps } = props
  const [{ value: fieldset }, localProps] = createSplitProps<RootProviderProps>()(restProps, [
    'value',
  ])
  const mergedProps = mergeProps(fieldset.getRootProps(), localProps)

  return (
    <FieldsetProvider value={fieldset}>
      <ark.fieldset {...mergedProps} ref={ref} />
    </FieldsetProvider>
  )
}
