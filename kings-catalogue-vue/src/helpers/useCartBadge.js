function formatBadgeCount(count) {
  return count > 9 ? "9+" : String(count);
}

export function updateCartBadges(count) {
  const badges = document.querySelectorAll(".js-cart-count-badge");

  badges.forEach((badge) => {
    if (count > 0) {
      badge.textContent = formatBadgeCount(count);
      badge.classList.remove("d-none");
      return;
    }

    badge.textContent = "";
    badge.classList.add("d-none");
  });
}
