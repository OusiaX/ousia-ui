import { arkSimple } from '@ousia-ui/ark'
import { styled } from 'styled-system/jsx'
import { textarea } from 'styled-system/recipes'
import type { ComponentProps } from 'styled-system/types'

export type TextareaProps = ComponentProps<typeof Textarea>
export const Textarea = styled(arkSimple.textarea, textarea)
