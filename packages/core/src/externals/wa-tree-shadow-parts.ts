import { css } from 'lit';

/**
 * Stretch the Web Awesome label slot across the rest of the tree row.
 *
 * By default the slot is only as wide as its content, so clicks (and the context menu’s
 * synthetic click) in the empty area beside a short name often miss the slotted nodes.
 * `wa-tree` only updates selection when mousedown and click targets line up, so those
 * misses leave the wrong row selected. `flex: 1` makes the label column fill the row
 * so hits stay on the item’s content.
 *
 * Applied via `DocksWidget.finalizeStyles`: document-level CSS cannot target `::part()`
 * on `wa-tree-item` that lives only inside nested Lit shadow roots.
 */
export const waTreeLabelSlotStretch = css`
    wa-tree-item::part(label) {
        flex: 1;
        min-width: 0;
    }
`;
