import { type HTMLProps, type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { composeRefs, useFieldContext } from '@ousia-ui/ark/utils'
import { autoresizeTextarea } from '@zag-js/auto-resize'
import { type Ref, useEffect, useRef } from 'react'

export interface FieldTextareaBaseProps extends PolymorphicProps {
  /**
   * Whether the textarea should autoresize
   * @default false
   */
  autoresize?: boolean | undefined
}
export interface FieldTextareaProps extends HTMLProps<'textarea'>, FieldTextareaBaseProps {}

export const FieldTextarea = (props: FieldTextareaProps & { ref?: Ref<HTMLTextAreaElement> }) => {
  const { ref, autoresize, ...restProps } = props
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const field = useFieldContext()
  const mergedProps = mergeProps<HTMLProps<'textarea'>>(
    field?.getTextareaProps(),
    { style: { resize: autoresize ? 'none' : undefined } },
    restProps,
  )

  useEffect(() => {
    if (!autoresize) return
    return autoresizeTextarea(textareaRef.current)
  }, [autoresize])

  return <ark.textarea {...mergedProps} ref={composeRefs(ref, textareaRef)} />
}
