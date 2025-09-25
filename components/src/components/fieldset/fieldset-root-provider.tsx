import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { createSplitProps, type UseFieldsetReturn, FieldsetProvider } from '@ousia-ui/ark/utils'
import { arkMemo, type HTMLProps, type PolymorphicProps } from '@ousia-ui/ark'

interface RootProviderProps {
  value: UseFieldsetReturn
}

export interface FieldsetRootProviderBaseProps extends RootProviderProps, PolymorphicProps {}
export interface FieldsetRootProviderProps extends HTMLProps<'fieldset'>, FieldsetRootProviderBaseProps {}

export const FieldsetRootProvider = forwardRef<HTMLFieldSetElement, FieldsetRootProviderProps>((props, ref) => {
  const [{ value: fieldset }, localProps] = createSplitProps<RootProviderProps>()(props, ['value'])
  const mergedProps = mergeProps(fieldset.getRootProps(), localProps)

  return (
    <FieldsetProvider value={fieldset}>
      <arkMemo.fieldset {...mergedProps} ref={ref} />
    </FieldsetProvider>
  )
})

FieldsetRootProvider.displayName = 'FieldsetRootProvider'
