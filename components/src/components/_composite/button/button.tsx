import { ark } from '@ousia-ui/ark'
import { Center, styled } from 'styled-system/jsx'
import { button } from 'styled-system/recipes'
import type { ComponentProps } from 'styled-system/types'
import { Spinner } from '../../spinner'

interface ButtonLoadingProps {
  loading?: boolean
  loadingText?: React.ReactNode
}

export interface ButtonProps extends StyledButtonProps, ButtonLoadingProps {}
export type StyledButtonProps = ComponentProps<typeof StyledButton>
const StyledButton = styled(ark.button, button)

export const Button = (props: ButtonProps) => {
  const { ref, loading, disabled, loadingText, children, ...restProps } = props

  const trulyDisabled = loading || disabled

  return (
    <StyledButton disabled={trulyDisabled} ref={ref} {...restProps}>
      {loading && !loadingText ? (
        <>
          <ButtonSpinner />
          <styled.span opacity={0}>{children}</styled.span>
        </>
      ) : loadingText ? (
        loadingText
      ) : (
        children
      )}
    </StyledButton>
  )
}

const ButtonSpinner = () => (
  <Center inline position="absolute" transform="translate(-50%, -50%)" top="50%" insetStart="50%">
    <Spinner
      width="1.1em"
      height="1.1em"
      borderWidth="1.5px"
      borderTopColor="fg.disabled"
      borderRightColor="fg.disabled"
    />
  </Center>
)
