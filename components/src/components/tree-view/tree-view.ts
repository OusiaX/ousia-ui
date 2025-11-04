'use client'
import type { Assign, PolymorphicProps } from '@ousia-ui/ark'
import type { TreeNode } from '@zag-js/collection'
import { type TreeViewVariantProps, treeView } from 'styled-system/recipes'
import type { ComponentProps, HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/utils/create-style-context'
import { TreeViewBranch } from './tree-view-branch'
import { TreeViewBranchContent } from './tree-view-branch-content'
import { TreeViewBranchControl } from './tree-view-branch-control'
import { TreeViewBranchIndentGuide } from './tree-view-branch-indent-guide'
import { TreeViewBranchIndicator } from './tree-view-branch-indicator'
import { TreeViewBranchText } from './tree-view-branch-text'
import { TreeViewBranchTrigger } from './tree-view-branch-trigger'
import { TreeViewItem } from './tree-view-item'
import { TreeViewItemIndicator } from './tree-view-item-indicator'
import { TreeViewItemText } from './tree-view-item-text'
import { TreeViewLabel } from './tree-view-label'
import { TreeViewNodeProvider, type TreeViewNodeProviderBaseProps } from './tree-view-node-provider'
import { TreeViewRoot, type TreeViewRootBaseProps } from './tree-view-root'
import { TreeViewRootProvider, type TreeViewRootProviderBaseProps } from './tree-view-root-provider'
import { TreeViewTree } from './tree-view-tree'

const { withProvider, withContext } = createStyleContext(treeView)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<'div'>, TreeViewRootProviderBaseProps<TreeNode>>,
    TreeViewVariantProps
  >
>(TreeViewRootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  HTMLDivElement,
  Assign<Assign<HTMLStyledProps<'div'>, TreeViewRootBaseProps<TreeNode>>, TreeViewVariantProps>
>(TreeViewRoot, 'root')

export const BranchContent = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(TreeViewBranchContent, 'branchContent')

export const BranchControl = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(TreeViewBranchControl, 'branchControl')

export const BranchIndicator = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(TreeViewBranchIndicator, 'branchIndicator')

export const Branch = withContext<HTMLDivElement, Assign<HTMLStyledProps<'div'>, PolymorphicProps>>(
  TreeViewBranch,
  'branch',
)

export const BranchText = withContext<
  HTMLSpanElement,
  Assign<HTMLStyledProps<'span'>, PolymorphicProps>
>(TreeViewBranchText, 'branchText')

export const BranchIndentGuide = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(TreeViewBranchIndentGuide, 'branchIndentGuide')

export const BranchTrigger = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(TreeViewBranchTrigger, 'branchTrigger')

export const ItemIndicator = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>
>(TreeViewItemIndicator, 'itemIndicator')

export const Item = withContext<HTMLDivElement, Assign<HTMLStyledProps<'div'>, PolymorphicProps>>(
  TreeViewItem,
  'item',
)

export const ItemText = withContext<
  HTMLSpanElement,
  Assign<HTMLStyledProps<'span'>, PolymorphicProps>
>(TreeViewItemText, 'itemText')

export const Label = withContext<
  HTMLLabelElement,
  Assign<HTMLStyledProps<'label'>, PolymorphicProps>
>(TreeViewLabel, 'label')

export const Tree = withContext<HTMLDivElement, Assign<HTMLStyledProps<'div'>, PolymorphicProps>>(
  TreeViewTree,
  'tree',
)

export type NodeProviderProps = TreeViewNodeProviderBaseProps<TreeNode>
export const NodeProvider = TreeViewNodeProvider

export { TreeViewContext as Context } from './tree-view-context'
