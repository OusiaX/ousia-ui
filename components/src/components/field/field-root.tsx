import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import {
  FieldProvider,
  type UseFieldProps,
  composeRefs,
  createSplitProps,
  useField,
} from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'

export interface FieldRootBaseProps extends UseFieldProps, PolymorphicProps {}
export interface FieldRootProps extends ComponentProps<'div'>, FieldRootBaseProps {}

export const FieldRoot = (props: FieldRootProps) => {
  const { ref, ...restProps } = props
  const [useFieldProps, localProps] = createSplitProps<UseFieldProps>()(restProps, [
    'id',
    'ids',
    'disabled',
    'invalid',
    'readOnly',
    'required',
  ])
  const field = useField(useFieldProps)
  const mergedProps = mergeProps(field.getRootProps(), localProps)

  return (
    <FieldProvider value={field}>
      <ark.div {...mergedProps} ref={composeRefs(ref, field.refs.rootRef)} />
    </FieldProvider>
  )
}
