import { CheckIcon, ClipboardCopyIcon } from 'lucide-react'
import { Clipboard } from '~/components/clipboard'
import { FormLabel } from '~/components/form-label'
import { IconButton } from '~/components/icon-button'
import { Input } from '~/components/input'

export const Demo = (props: Clipboard.RootProps) => {
  return (
    <Clipboard.Root value="https://park-ui.com" {...props}>
      <Clipboard.Label asChild>
        <FormLabel>Copy this link</FormLabel>
      </Clipboard.Label>
      <Clipboard.Control>
        <Clipboard.Input asChild>
          <Input />
        </Clipboard.Input>
        <Clipboard.Trigger asChild>
          <IconButton variant="outline">
            <Clipboard.Indicator copied={<CheckIcon />}>
              <ClipboardCopyIcon />
            </Clipboard.Indicator>
          </IconButton>
        </Clipboard.Trigger>
      </Clipboard.Control>
    </Clipboard.Root>
  )
}
