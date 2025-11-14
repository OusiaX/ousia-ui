'use client'
import { ExternalLinkIcon, InfoIcon, OctagonAlertIcon } from 'lucide-react'
import { Runner } from 'react-runner'
import { Box, Flex, HStack, Stack } from 'styled-system/jsx'
import { Button } from '~/components/ui/_composite/button'
import { Code } from '~/components/ui/_typography/code'
import { Heading } from '~/components/ui/_typography/heading'
import { Link } from '~/components/ui/_typography/link'
import { Text } from '~/components/ui/_typography/text'
import { Alert } from '~/components/ui/alert'
import { Avatar } from '~/components/ui/avatar'
import { Checkbox } from '~/components/ui/checkbox'
import { Field } from '~/components/ui/field'
import { Fieldset } from '~/components/ui/fieldset'
import { Icon } from '~/components/ui/icon'
import { Input } from '~/components/ui/input'
import { Skeleton } from '~/components/ui/skeleton'
import { Slider } from '~/components/ui/slider'
import { Spinner } from '~/components/ui/spinner'
import { Switch } from '~/components/ui/switch'
import { Textarea } from '~/components/ui/textarea'

const icons = { InfoIcon, ExternalLinkIcon, OctagonAlertIcon }
const scope = {
  Alert,
  Avatar,
  Box,
  Button,
  Checkbox,
  Code,
  Flex,
  Field,
  Fieldset,
  Heading,
  HStack,
  Icon,
  Input,
  Link,
  Skeleton,
  Slider,
  Spinner,
  Stack,
  Switch,
  Text,
  Textarea,
  ...icons,
}

type Props = {
  code: string
}

export const LivePreview = (props: Props) => {
  const { code } = props
  return <Runner code={code} scope={scope} />
}
