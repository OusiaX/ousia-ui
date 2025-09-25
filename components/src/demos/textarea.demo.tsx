import { Stack } from 'styled-system/jsx'
import { FormLabel } from '~/components/form-label'
import { Textarea, type TextareaProps } from '~/components/textarea'

export const Demo = (props: TextareaProps) => {
  return (
    <Stack gap="1.5" width="2xs">
      <FormLabel htmlFor="description">Description</FormLabel>
      <Textarea id="description" rows={4} {...props} />
    </Stack>
  )
}
