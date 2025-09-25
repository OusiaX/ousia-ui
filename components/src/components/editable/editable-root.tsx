import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import type { Assign } from '@ousia-ui/ark'
import { arkMemo } from '@ousia-ui/ark'
import type { HTMLProps, PolymorphicProps } from '@ousia-ui/ark'
import { createSplitProps } from '@ousia-ui/ark/utils'
import { type UseEditableProps, useEditable } from './use-editable'
import { EditableProvider } from './use-editable-context'

export interface EditableRootBaseProps extends UseEditableProps, PolymorphicProps {}
export interface EditableRootProps extends Assign<HTMLProps<'div'>, EditableRootBaseProps> {}

export const EditableRoot = forwardRef<HTMLDivElement, EditableRootProps>((props, ref) => {
  const [useEditableProps, localProps] = createSplitProps<UseEditableProps>()(props, [
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
      <arkMemo.div {...mergedProps} ref={ref} />
    </EditableProvider>
  )
})

EditableRoot.displayName = 'EditableRoot'
