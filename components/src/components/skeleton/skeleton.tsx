'use client'
import { type Assign, type HTMLProps, ark } from '@ousia-ui/ark'
import type { Ref } from 'react'
import { styled } from 'styled-system/jsx'
import { type SkeletonVariantProps, skeleton } from 'styled-system/recipes'
import type { JsxStyleProps } from 'styled-system/types'

const StyledSkeleton = styled(ark.div, skeleton)

export interface SkeletonProps
  extends Assign<JsxStyleProps, HTMLProps<'div'>>,
    SkeletonVariantProps {
  /**
   *
   * @default false
   */
  isLoaded?: boolean
}

export const Skeleton = (props: SkeletonProps & { ref?: Ref<HTMLDivElement> }) => {
  const { ref, ...restProps } = props
  const { isLoaded, ...otherProps } = restProps

  if (isLoaded) {
    return <styled.div animation="fade-in" ref={ref} {...otherProps} />
  }
  return <StyledSkeleton ref={ref} {...otherProps} />
}
