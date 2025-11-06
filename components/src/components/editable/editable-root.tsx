import { type Assigns, type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'
import { type UseEditableProps, useEditable } from './use-editable'
import { EditableProvider } from './use-editable-context'

export const EditableRootElement = 'div' as const
export type EditableRootProps = Assigns<
  ComponentProps<typeof EditableRootElement>,
  UseEditableProps,
  PolymorphicProps
>

export const EditableRoot = (props: EditableRootProps) => {
  const { ref, ...restProps } = props
  const [useEditableProps, localProps] = createSplitProps<UseEditableProps>()(restProps, [
    'activationMode',
    'autoResize',
    'defaultEdit',
    'defaultValue',
    'disabled',
    'edit',
    'finalFocusEl',
    'form',
    'id',
    'ids',
    'invalid',
    'maxLength',
    'name',
    'onEditChange',
    'onFocusOutside',
    'onInteractOutside',
    'onPointerDownOutside',
    'onValueChange',
    'onValueCommit',
    'onValueRevert',
    'placeholder',
    'readOnly',
    'required',
    'selectOnFocus',
    'submitMode',
    'translations',
    'value',
  ])
  const editable = useEditable(useEditableProps)
  const mergedProps = mergeProps(editable.getRootProps(), localProps)

  return (
    <EditableProvider value={editable}>
      <ark.div {...mergedProps} ref={ref} />
    </EditableProvider>
  )
}
