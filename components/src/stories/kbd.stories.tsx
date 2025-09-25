import type { Meta } from '@storybook/react'
import { Kbd } from '~/components/_typography/kbd'

const meta: Meta = {
  title: 'Components/Kbd',
}

export default meta

export const Base = () => <Kbd>Shift + Alt</Kbd>
