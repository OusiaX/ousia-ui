import { arkSimple } from '@ousia-ui/ark'
import { styled } from 'styled-system/jsx'
import { spinner } from 'styled-system/recipes'
import type { ComponentProps } from 'styled-system/types'

export type SpinnerProps = ComponentProps<typeof Spinner>
export const Spinner = styled(arkSimple.div, spinner)
