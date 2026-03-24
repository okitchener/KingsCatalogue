# Changelog

All notable changes to this project will be documented in this file.


## [Unreleased]
- Profile page
- Login Page
- Account Creation
- Account login functionality
- Review System
- Featured Products
- Rewards/Rank-up System 
- Discounts and Promo Codes
- fix checkout functionality 
- change inputs to require validation
- Improve UI/UX
## [2.5.0] - 2026-03-22

### Added
- Added a multi-step checkout flow (Customer Information, Shipping Address, Payment) with step navigation controls.
- Added form step state wiring between checkout components (`formStep` + `step-change` event) so progress updates live.
- Added themed checkout progress stepper styles in `main.scss`/`main.css` to match the Kings Catalogue royal purple and gold palette.
- Added basic browser-native form validation across checkout steps using required fields and numeric-only patterns where applicable.

### Changed
- Replaced the previous accordion-based checkout details UI with a guided step-by-step wizard layout.
- Upgraded checkout progress from a simple two-label indicator to a four-stage visual stepper with active and completed states.
- Simplified checkout validation logic by removing complex custom validation state in favor of HTML constraint validation.
- Updated payment input constraints: card number now enforces exactly 12 digits, CVV enforces exactly 3 digits, and expiry uses MM/DD pattern validation.

### Fixed
- Fixed oversized `CheckoutForm` content caused by duplicated legacy validation/template blocks.
- Fixed checkout form template event bindings after cleanup to ensure component rendering and emitted events work correctly.

## [2.2.0] - 2026-03-22

### Added
- Added a themed profile page wireframe layout in profile.html to match the existing Kings Catalogue style.
- Added profile-specific css in main.scss/main.css for the hero panel, rank sections, sidebar, and profile cards.
- Added profile.js to connect the profile page to shared Vue cart components and store.

### Changed
- Updated the profile header to match index/checkout icon-style controls.
- Updated the profile cart trigger to open the right-side offcanvas drawer (same interaction pattern as other pages).
- Replaced the profile cart placeholder drawer content with shared cart-list and cart-summary components.

### Fixed
- Fixed profile cart behavior to use the same shared cart state as index and checkout pages.
- Fixed profile cart icon badge behavior by using the same red quantity badge pattern and live count updates.

## [0.2.0] - 2026-03-21

### Added
- Added Components/useCatalogQuery.js to contain catalog filtering and sorting logic.
- Added Components/useProductSelection.js to contain modal product selection shaping.
- Added Components/useToast.js to manage toast visibility timing and message state.
- Added Components/CatalogSearch.js as a reusable search input component.
- Added cart quantity badges to header chest icons with max display capped at 9+.
- Added Components/useCartBadge.js to contain cart badge update logic.

### Changed
- Moved cart totals logic (subtotal, tax, shipping, grand total) into Components/CartSummary.js.
- Updated index and checkout cart-summary usage to pass cart data instead of precomputed totals.
- Simplified app.js and checkout.js by removing derived total computations no longer needed at page level.
- Applied Bootstrap sticky-footer layout so footers stay anchored to the bottom on short pages.
- Widened cart drawer using a dedicated class and offcanvas width variable to prevent clipped cart actions.
- Added extra checkout content bottom spacing to improve separation between checkout action buttons and footer.
- Replaced header search inputs with the CatalogSearch component and bound them to shared search state.
- Added product name filtering from the Search royal wares input so matching products display in the main grid.
- Reduced mobile filter clutter with a collapsible filter panel toggle.
- Improved medium layout by widening the filter column and shortening long sort label text.
- Updated medium product listing layout from three cards per row to two cards per row.

### Fixed
- Fixed delayed add-to-cart toast rendering by making toast state reactive.
- Fixed cart badge disappearing on page refresh by syncing badge state after mount.

## [0.1.1] - 2026-03-20

### Added
- Added themed image framing for product images using the existing color theme.

### Changed
- Updated product cards to use a consistent vertical layout so titles, descriptions, prices, and actions align more cleanly.
- Updated default product sorting to A-Z at first render.
- Updated the sort dropdown default from placeholder dashes to a clear A-Z option.

### Fixed
- Replaced shopping cart header icons with treasure chest imagery across desktop and mobile headers.
- Applied consistent bordered button styling to product card and modal action buttons.


## [0.1.0] - 2026-03-17

### Changed
- Updated the product listing layout to show three cards per row on medium screens.
- Updated the product listing layout to show five cards per row on large screens

