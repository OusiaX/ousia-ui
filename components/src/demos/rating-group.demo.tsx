import { RatingGroup, type RatingGroupProps } from '~/components/rating-group'

export const Demo = (props: RatingGroupProps) => {
  return (
    <RatingGroup defaultValue={3} {...props}>
      Label
    </RatingGroup>
  )
}
