import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import {
  FieldsetProvider,
  type UseFieldsetProps,
  composeRefs,
  createSplitProps,
  useFieldset,
} from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'

export interface FieldsetRootBaseProps extends UseFieldsetProps, PolymorphicProps {}
export interface FieldsetRootProps extends ComponentProps<'fieldset'>, FieldsetRootBaseProps {}

export const FieldsetRoot = (props: FieldsetRootProps) => {
  const { ref, ...restProps } = props
  const [useFieldsetProps, localProps] = createSplitProps<UseFieldsetProps>()(restProps, [
    'id',
    'disabled',
    'invalid',
  ])
  const fieldset = useFieldset(useFieldsetProps)
  const mergedProps = mergeProps<ComponentProps<'fieldset'>>(fieldset.getRootProps(), localProps)

  return (
    <FieldsetProvider value={fieldset}>
      <ark.fieldset {...mergedProps} ref={composeRefs(ref, fieldset.refs.rootRef)} />
    </FieldsetProvider>
  )
}
