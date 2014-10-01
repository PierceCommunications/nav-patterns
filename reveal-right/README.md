# Reveal from the right

In smaller viewports with basic JavaScript support the nav appears at the bottom of the page. A skiplink at the top of the page links to it. In practice IE9 Mobile and some version of Opera Mini use this layout and behaviour.

A small inline mustard cut in the `<head>` checks for classList API and `querySelector` support and the enhancement kicks in.

A polyfill for `transitionend` is used to detect when the nav is fully visible, and then the `z-index` is raised. Without this the nav would either be unusable or flash into view above the main content area. As soon as the close action is initiated the `z-index` on the nav is lowered to prevent it sitting on top of the body while it closes then snapping out of view.

The close button has a solid background colour. This needs to be replaced with a Grunticon generated image.

## Issues

The Sass uses the nested BEM pattern which we will no longer be using for two reasons: searching for a block or modifier returns no results and it gets too messy when writing for hover/focus interactions.
