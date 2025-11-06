import type { Assign } from '@ousia-ui/ark'
import * as StyledProgress from './progress'

export type ProgressProps = Assign<
  StyledProgress.RootProps,
  {
    /**
     * The type of progress to render.
     * @default linear
     */
    type?: 'linear' | 'circular'
  }
>

export const Progress = (props: ProgressProps) => {
  const { ref, children, type = 'linear', ...rootProps } = props

  return (
    <StyledProgress.Root ref={ref} {...rootProps}>
      {children && <StyledProgress.Label>{children}</StyledProgress.Label>}
      {type === 'linear' && (
        <StyledProgress.Track>
          <StyledProgress.Range />
        </StyledProgress.Track>
      )}
      {type === 'circular' && (
        <StyledProgress.Circle>
          <StyledProgress.CircleTrack />
          <StyledProgress.CircleRange />
          <StyledProgress.ValueText />
        </StyledProgress.Circle>
      )}
      <StyledProgress.ValueText />
    </StyledProgress.Root>
  )
}
