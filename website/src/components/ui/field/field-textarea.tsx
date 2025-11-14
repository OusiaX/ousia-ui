import { type PolymorphicProps, ark, mergeProps } from '@ousia-ui/ark'
import { composeRefs, useFieldContext } from '@ousia-ui/ark/utils'
import { autoresizeTextarea } from '@zag-js/auto-resize'
import { type ComponentProps, useEffect, useRef } from 'react'

export interface FieldTextareaProps extends ComponentProps<'textarea'>, PolymorphicProps {
  /**
   * Whether the textarea should autoresize
   * @default false
   */
  autoresize?: boolean | undefined
}

export const FieldTextarea = (props: FieldTextareaProps) => {
  const { ref, autoresize, ...restProps } = props
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const field = useFieldContext()
  const mergedProps = mergeProps<ComponentProps<'textarea'>>(
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
