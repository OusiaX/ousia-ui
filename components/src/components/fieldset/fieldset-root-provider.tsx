import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { FieldsetProvider, type UseFieldsetReturn, createSplitProps } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'

interface RootProviderProps {
  value: UseFieldsetReturn
}

export const FieldsetRootProviderElement = 'fieldset' as const
export interface FieldsetRootProviderProps
  extends ComponentProps<typeof FieldsetRootProviderElement>,
    RootProviderProps,
    PolymorphicProps {}

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
