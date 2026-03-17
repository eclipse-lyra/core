import {Contribution} from "./contributionregistry";

export interface TreeNode {
    data: any;
    label: string;
    icon?: string;
    leaf: boolean;
    children: TreeNode[];
    /**
     * Optional flag to indicate that the node's children
     * have been loaded at least once. This is useful for
     * distinguishing between "not yet loaded" (lazy) and
     * "loaded but empty", so UI elements like spinners
     * don't remain visible for empty folders.
     */
    loaded?: boolean;
}

export const treeNodeComparator = (c1: TreeNode, c2: TreeNode) => {
    if (!c1.leaf && c2.leaf) {
        return -1
    }
    if (c1.leaf && !c2.leaf) {
        return 1
    }
    return c1.label.localeCompare(c2.label)
}

export interface TreeContribution extends Contribution {
    contributionId?: string;
    state?: { [key: string]: any }
}