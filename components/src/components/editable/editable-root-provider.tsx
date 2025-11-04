import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import type { UseEditableReturn } from './use-editable'
import { EditableProvider } from './use-editable-context'

interface RootProviderProps {
  value: UseEditableReturn
}

export interface EditableRootProviderBaseProps extends RootProviderProps, PolymorphicProps {}
export interface EditableRootProviderProps
  extends ComponentProps<'div'>,
    EditableRootProviderBaseProps {}

export const EditableRootProvider = (props: EditableRootProviderProps) => {
  const { ref, ...restProps } = props
  const [{ value: editable }, localProps] = createSplitProps<RootProviderProps>()(restProps, [
    'value',
  ])
  const mergedProps = mergeProps(editable.getRootProps(), localProps)

  return (
    <EditableProvider value={editable}>
      <ark.div {...mergedProps} ref={ref} />
    </EditableProvider>
  )
}
