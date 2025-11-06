'use client'
import type { Assign } from '@ousia-ui/ark'
import { type SplitterVariantProps, splitter } from 'styled-system/recipes'
import type { ComponentProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import { SplitterPanel, type SplitterPanelElement, type SplitterPanelProps } from './splitter-panel'
import {
  SplitterResizeTrigger,
  type SplitterResizeTriggerElement,
  type SplitterResizeTriggerProps,
} from './splitter-resize-trigger'
import { SplitterRoot, type SplitterRootElement, type SplitterRootProps } from './splitter-root'
import {
  SplitterRootProvider,
  type SplitterRootProviderElement,
  type SplitterRootProviderProps,
} from './splitter-root-provider'

const { withProvider, withContext } = createStyleContext(splitter)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  typeof SplitterRootProviderElement,
  Assign<SplitterRootProviderProps, SplitterVariantProps>
>(SplitterRootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  typeof SplitterRootElement,
  Assign<SplitterRootProps, SplitterVariantProps>
>(SplitterRoot, 'root')

export const Panel = withContext<typeof SplitterPanelElement, SplitterPanelProps>(
  SplitterPanel,
  'panel',
)

export const ResizeTrigger = withContext<
  typeof SplitterResizeTriggerElement,
  SplitterResizeTriggerProps
>(SplitterResizeTrigger, 'resizeTrigger')

export { SplitterContext as Context } from './splitter-context'
