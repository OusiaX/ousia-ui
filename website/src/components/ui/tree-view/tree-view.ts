'use client'
import type { Assign } from '@ousia-ui/ark'
import type { TreeNode } from '@zag-js/collection'
import { type TreeViewVariantProps, treeView } from 'styled-system/recipes'
import type { ComponentProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import {
  TreeViewBranch,
  type TreeViewBranchElement,
  type TreeViewBranchProps,
} from './tree-view-branch'
import {
  TreeViewBranchContent,
  type TreeViewBranchContentElement,
  type TreeViewBranchContentProps,
} from './tree-view-branch-content'
import {
  TreeViewBranchControl,
  type TreeViewBranchControlElement,
  type TreeViewBranchControlProps,
} from './tree-view-branch-control'
import {
  TreeViewBranchIndentGuide,
  type TreeViewBranchIndentGuideElement,
  type TreeViewBranchIndentGuideProps,
} from './tree-view-branch-indent-guide'
import {
  TreeViewBranchIndicator,
  type TreeViewBranchIndicatorElement,
  type TreeViewBranchIndicatorProps,
} from './tree-view-branch-indicator'
import {
  TreeViewBranchText,
  type TreeViewBranchTextElement,
  type TreeViewBranchTextProps,
} from './tree-view-branch-text'
import {
  TreeViewBranchTrigger,
  type TreeViewBranchTriggerElement,
  type TreeViewBranchTriggerProps,
} from './tree-view-branch-trigger'
import { TreeViewItem, type TreeViewItemElement, type TreeViewItemProps } from './tree-view-item'
import {
  TreeViewItemIndicator,
  type TreeViewItemIndicatorElement,
  type TreeViewItemIndicatorProps,
} from './tree-view-item-indicator'
import {
  TreeViewItemText,
  type TreeViewItemTextElement,
  type TreeViewItemTextProps,
} from './tree-view-item-text'
import {
  TreeViewLabel,
  type TreeViewLabelElement,
  type TreeViewLabelProps,
} from './tree-view-label'
import { TreeViewNodeProvider, type TreeViewNodeProviderProps } from './tree-view-node-provider'
import { TreeViewRoot, type TreeViewRootElement, type TreeViewRootProps } from './tree-view-root'
import {
  TreeViewRootProvider,
  type TreeViewRootProviderElement,
  type TreeViewRootProviderProps,
} from './tree-view-root-provider'
import { TreeViewTree, type TreeViewTreeElement, type TreeViewTreeProps } from './tree-view-tree'

const { withProvider, withContext } = createStyleContext(treeView)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  typeof TreeViewRootProviderElement,
  Assign<TreeViewRootProviderProps<TreeNode>, TreeViewVariantProps>
>(TreeViewRootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  typeof TreeViewRootElement,
  Assign<TreeViewRootProps<TreeNode>, TreeViewVariantProps>
>(TreeViewRoot, 'root')

export const BranchContent = withContext<
  typeof TreeViewBranchContentElement,
  TreeViewBranchContentProps
>(TreeViewBranchContent, 'branchContent')

export const BranchControl = withContext<
  typeof TreeViewBranchControlElement,
  TreeViewBranchControlProps
>(TreeViewBranchControl, 'branchControl')

export const BranchIndicator = withContext<
  typeof TreeViewBranchIndicatorElement,
  TreeViewBranchIndicatorProps
>(TreeViewBranchIndicator, 'branchIndicator')

export const Branch = withContext<typeof TreeViewBranchElement, TreeViewBranchProps>(
  TreeViewBranch,
  'branch',
)

export const BranchText = withContext<typeof TreeViewBranchTextElement, TreeViewBranchTextProps>(
  TreeViewBranchText,
  'branchText',
)

export const BranchIndentGuide = withContext<
  typeof TreeViewBranchIndentGuideElement,
  TreeViewBranchIndentGuideProps
>(TreeViewBranchIndentGuide, 'branchIndentGuide')

export const BranchTrigger = withContext<
  typeof TreeViewBranchTriggerElement,
  TreeViewBranchTriggerProps
>(TreeViewBranchTrigger, 'branchTrigger')

export const ItemIndicator = withContext<
  typeof TreeViewItemIndicatorElement,
  TreeViewItemIndicatorProps
>(TreeViewItemIndicator, 'itemIndicator')

export const Item = withContext<typeof TreeViewItemElement, TreeViewItemProps>(TreeViewItem, 'item')

export const ItemText = withContext<typeof TreeViewItemTextElement, TreeViewItemTextProps>(
  TreeViewItemText,
  'itemText',
)

export const Label = withContext<typeof TreeViewLabelElement, TreeViewLabelProps>(
  TreeViewLabel,
  'label',
)

export const Tree = withContext<typeof TreeViewTreeElement, TreeViewTreeProps>(TreeViewTree, 'tree')

export type NodeProviderProps = TreeViewNodeProviderProps<TreeNode>
export const NodeProvider = TreeViewNodeProvider

export { TreeViewContext as Context } from './tree-view-context'
