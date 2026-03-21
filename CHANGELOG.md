# Changelog

All notable changes to this project will be documented in this file.


## [Unreleased]
- Search Bar functionality 
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
- Mobile Header menu functionality
- Fix Mobile filter system to be less cluttered 
-Fix medium screen filter spacing

## [0.2.0] - 2026-03-21

### Added
- Added Components/useCatalogQuery.js to control catalog filtering and sorting logic.
- Added Components/useProductSelection.js to control modal product selection shaping.
- Added Components/useToast.js to manage toast visibility timing and message state.

### Changed
- Moved cart totals logic (subtotal, tax, shipping, grand total) into Components/CartSummary.js.
- Updated index and checkout cart-summary usage to pass cart data instead of precomputed totals.
- Simplified app.js and checkout.js by removing derived total computations no longer needed at page level.
- Applied Bootstrap sticky-footer layout so footers stay anchored to the bottom on short pages.
- Widened cart drawer using a dedicated class and offcanvas width variable to prevent clipped cart actions.
- Added extra checkout content bottom spacing to improve separation between checkout action buttons and footer.

### Fixed
- Fixed delayed add-to-cart toast rendering by making toast state reactive.

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

