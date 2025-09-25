import { arkSimple } from '@ousia-ui/ark'
import { styled } from 'styled-system/jsx'
import { kbd } from 'styled-system/recipes'
import type { ComponentProps } from 'styled-system/types'

export type KbdProps = ComponentProps<typeof Kbd>
export const Kbd = styled(arkSimple.kbd, kbd)
