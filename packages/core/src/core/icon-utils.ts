import { html, nothing } from 'lit';
import type { TemplateResult } from 'lit';

export interface ParsedIconSpec {
    name: string;
    library?: string;
}

export interface IconOptions {
    label?: string;
    slot?: string;
}

/**
 * Parses an icon spec string into `{ library, name }` for use with `wa-icon`.
 *
 * Icon specs support an optional icon library prefix followed by the icon name,
 * separated by whitespace, e.g. `"docks mark-github"`.
 *
 * - When the spec contains **no whitespace**, it is treated as the icon name only
 *   and `library` is omitted so the default Web Awesome / Font Awesome library is used.
 * - When the spec contains **whitespace**, the **last segment** is treated as
 *   the icon name and every prior segment (joined by a single space) becomes `library`.
 *
 * Prefer {@link icon} for rendering; use parseIconSpec only when you need the parsed parts.
 */
export function parseIconSpec(spec: string): ParsedIconSpec {
    const trimmed = (spec ?? '').trim();
    if (!trimmed) return { name: '' };
    const parts = trimmed.split(/\s+/);
    if (parts.length <= 1) return { name: trimmed };
    const name = parts.pop()!;
    const library = parts.join(' ');
    return { name, library };
}

/**
 * Returns a Lit template that renders a `wa-icon` for the given spec.
 * Use this for all icon rendering so specs (e.g. contribution `icon` fields) stay consistent.
 * Handles undefined/null/empty spec internally; call sites may pass values directly.
 */
export function icon(spec: string | undefined | null, options?: IconOptions): TemplateResult {
    const { name: iconName, library } = parseIconSpec(spec ?? '');
    return html`<wa-icon library=${library ?? nothing} name=${iconName} label=${options?.label ?? nothing} slot=${options?.slot ?? nothing}></wa-icon>`;
}
