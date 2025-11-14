import { type Assigns, type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import {
  FieldsetProvider,
  type UseFieldsetProps,
  composeRefs,
  createSplitProps,
  useFieldset,
} from '@ousia-ui/ark/utils'
import type { ComponentProps } from 'react'

export const FieldsetRootElement = 'fieldset' as const
export type FieldsetRootProps = Assigns<
  ComponentProps<typeof FieldsetRootElement>,
  UseFieldsetProps,
  PolymorphicProps
>

export const FieldsetRoot = (props: FieldsetRootProps) => {
  const { ref, ...restProps } = props
  const [useFieldsetProps, localProps] = createSplitProps<UseFieldsetProps>()(restProps, [
    'id',
    'disabled',
    'invalid',
  ])
  const fieldset = useFieldset(useFieldsetProps)
  const mergedProps = mergeProps<ComponentProps<typeof FieldsetRootElement>>(
    fieldset.getRootProps(),
    localProps,
  )

  return (
    <FieldsetProvider value={fieldset}>
      <ark.fieldset {...mergedProps} ref={composeRefs(ref, fieldset.refs.rootRef)} />
    </FieldsetProvider>
  )
}
