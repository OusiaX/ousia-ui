import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { createSplitProps } from '@ousia-ui/ark/utils'
import { type HTMLProps, type PolymorphicProps, arkMemo } from '@ousia-ui/ark'
import type { UseFieldReturn } from '@ousia-ui/ark/utils'
import { FieldProvider } from '@ousia-ui/ark/utils'

interface RootProviderProps {
  value: UseFieldReturn
}

export interface FieldRootProviderBaseProps extends RootProviderProps, PolymorphicProps {}
export interface FieldRootProviderProps extends HTMLProps<'div'>, FieldRootProviderBaseProps {}

export const FieldRootProvider = forwardRef<HTMLDivElement, FieldRootProviderProps>((props, ref) => {
  const [{ value: field }, localProps] = createSplitProps<RootProviderProps>()(props, ['value'])
  const mergedProps = mergeProps<HTMLProps<'div'>>(field.getRootProps(), localProps)

  return (
    <FieldProvider value={field}>
      <arkMemo.div {...mergedProps} ref={ref} />
    </FieldProvider>
  )
})

FieldRootProvider.displayName = 'FieldRootProvider'
