"use client";
import type { Assign } from "@ousia-ui/ark";
import type { TreeNode } from '@zag-js/collection'
import { type TreeViewVariantProps, treeView } from "styled-system/recipes";
import type { ComponentProps, HTMLStyledProps } from "styled-system/types";
import { createStyleContext } from "~/utils/create-style-context";
import { TreeViewRootProvider, type TreeViewRootProviderBaseProps } from './tree-view-root-provider';
import { TreeViewRoot, type TreeViewRootBaseProps } from './tree-view-root';
import { TreeViewBranchContent, type TreeViewBranchContentBaseProps } from './tree-view-branch-content';
import { TreeViewBranchControl, type TreeViewBranchControlBaseProps } from './tree-view-branch-control';
import { TreeViewBranchIndicator, type TreeViewBranchIndicatorBaseProps } from './tree-view-branch-indicator';
import { TreeViewBranch, type TreeViewBranchBaseProps } from './tree-view-branch';
import { TreeViewBranchText, type TreeViewBranchTextBaseProps } from './tree-view-branch-text';
import { TreeViewBranchIndentGuide, type TreeViewBranchIndentGuideBaseProps } from './tree-view-branch-indent-guide';
import { TreeViewBranchTrigger, type TreeViewBranchTriggerBaseProps } from './tree-view-branch-trigger';
import { TreeViewItemIndicator, type TreeViewItemIndicatorBaseProps } from './tree-view-item-indicator';
import { TreeViewItem, type TreeViewItemBaseProps } from './tree-view-item';
import { TreeViewItemText, type TreeViewItemTextBaseProps } from './tree-view-item-text';
import { TreeViewLabel, type TreeViewLabelBaseProps } from './tree-view-label';
import { TreeViewTree, type TreeViewTreeBaseProps } from './tree-view-tree';
import { TreeViewNodeProvider, type TreeViewNodeProviderBaseProps } from './tree-view-node-provider';

const { withProvider, withContext } = createStyleContext(treeView);

export type RootProviderProps = ComponentProps<typeof RootProvider>;
export const RootProvider = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<"div">, TreeViewRootProviderBaseProps<TreeNode>>,
    TreeViewVariantProps
  >
>(TreeViewRootProvider, "root");

export type RootProps = ComponentProps<typeof Root>;
export const Root = withProvider<
  HTMLDivElement,
  Assign<
    Assign<HTMLStyledProps<"div">, TreeViewRootBaseProps<TreeNode>>,
    TreeViewVariantProps
  >
>(TreeViewRoot, "root");

export const BranchContent = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, TreeViewBranchContentBaseProps>
>(TreeViewBranchContent, "branchContent");

export const BranchControl = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, TreeViewBranchControlBaseProps>
>(TreeViewBranchControl, "branchControl");

export const BranchIndicator = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, TreeViewBranchIndicatorBaseProps>
>(TreeViewBranchIndicator, "branchIndicator");

export const Branch = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, TreeViewBranchBaseProps>
>(TreeViewBranch, "branch");

export const BranchText = withContext<
  HTMLSpanElement,
  Assign<HTMLStyledProps<"span">, TreeViewBranchTextBaseProps>
>(TreeViewBranchText, "branchText");

export const BranchIndentGuide = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, TreeViewBranchIndentGuideBaseProps>
>(TreeViewBranchIndentGuide, "branchIndentGuide");

export const BranchTrigger = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, TreeViewBranchTriggerBaseProps>
>(TreeViewBranchTrigger, "branchTrigger");

export const ItemIndicator = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, TreeViewItemIndicatorBaseProps>
>(TreeViewItemIndicator, "itemIndicator");

export const Item = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, TreeViewItemBaseProps>
>(TreeViewItem, "item");

export const ItemText = withContext<
  HTMLSpanElement,
  Assign<HTMLStyledProps<"span">, TreeViewItemTextBaseProps>
>(TreeViewItemText, "itemText");

export const Label = withContext<
  HTMLLabelElement,
  Assign<HTMLStyledProps<"label">, TreeViewLabelBaseProps>
>(TreeViewLabel, "label");

export const Tree = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<"div">, TreeViewTreeBaseProps>
>(TreeViewTree, "tree");

export type NodeProviderProps = TreeViewNodeProviderBaseProps<TreeNode>;
export const NodeProvider = TreeViewNodeProvider;

export { TreeViewContext as Context } from "./tree-view-context";
