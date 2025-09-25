import { ark } from '@ousia-ui/ark'
import { styled } from 'styled-system/jsx'
import { link } from 'styled-system/recipes'
import type { ComponentProps } from 'styled-system/types'

export type LinkProps = ComponentProps<typeof Link>
export const Link = styled(ark.a, link)
