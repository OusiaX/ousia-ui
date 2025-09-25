import { defineSlotRecipe } from '@pandacss/dev'

export const accordion = defineSlotRecipe({
  className: 'accordion',
  slots: ["root", "item", "trigger", "content"],
  base: {
    root: {
      width: 'full',
    },
    item: {
      borderBottomWidth: '1px',
      '&:last-child': {
        borderBottomWidth: '0',
      },
    },
    trigger: {
      display: 'flex',
      flex: '1',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: '4',
      py: '4',
      textAlign: 'left',
      fontSize: 'sm',
      fontWeight: 'medium',
      transition: 'all',
      outline: 'none',
      _hover: {
        textDecoration: 'underline',
      },
      _focusVisible: {
        borderColor: 'ring',
        ringColor: 'ring/50',
        ringWidth: '3px',
      },
      _disabled: {
        pointerEvents: 'none',
        opacity: '0.5',
      },
      '&[data-state=open] svg': {
        transform: 'rotate(180deg)',
      },
    },
    content: {
      overflow: 'hidden',
      fontSize: 'sm',
      '&[data-state=closed]': {
        animation: 'accordion-up',
      },
      '&[data-state=open]': {
        animation: 'accordion-down',
      },
    },
  },
})
