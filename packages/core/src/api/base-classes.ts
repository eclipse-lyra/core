// Re-export framework base classes for app usage
export { LyraPart } from '../parts/part';
export { LyraContainer } from '../parts/container';
export { LyraDialogContent } from '../parts/dialog-content';
export { LyraStandardLayout } from '../layouts/standard-layout';
export { LyraWidget } from '../widgets/widget';
export { LyraElement } from '../parts/element';
// Import to register the custom element
import '../layouts/standard-layout';

