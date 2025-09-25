import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { composeRefs, createSplitProps, useFieldset, type UseFieldsetProps, FieldsetProvider } from '@ousia-ui/ark/utils'
import { arkMemo, type HTMLProps, type PolymorphicProps } from '@ousia-ui/ark'

export interface FieldsetRootBaseProps extends UseFieldsetProps, PolymorphicProps {}
export interface FieldsetRootProps extends HTMLProps<'fieldset'>, FieldsetRootBaseProps {}

export const FieldsetRoot = forwardRef<HTMLFieldSetElement, FieldsetRootProps>((props, ref) => {
  const [useFieldsetProps, localProps] = createSplitProps<UseFieldsetProps>()(props, ['id', 'disabled', 'invalid'])
  const fieldset = useFieldset(useFieldsetProps)
  const mergedProps = mergeProps<HTMLProps<'fieldset'>>(fieldset.getRootProps(), localProps)

  return (
    <FieldsetProvider value={fieldset}>
      <arkMemo.fieldset {...mergedProps} ref={composeRefs(ref, fieldset.refs.rootRef)} />
    </FieldsetProvider>
  )
})

FieldsetRoot.displayName = 'FieldsetRoot'
