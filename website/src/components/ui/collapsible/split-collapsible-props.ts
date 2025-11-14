import { type UseCollapsibleProps, createSplitProps } from '@ousia-ui/ark/utils'

export const splitCollapsibleProps = <T extends UseCollapsibleProps>(props: T) =>
  createSplitProps<UseCollapsibleProps>()(props, [
    'defaultOpen',
    'disabled',
    'id',
    'ids',
    'lazyMount',
    'onExitComplete',
    'onOpenChange',
    'open',
    'unmountOnExit',
  ])
