<template>
  <footer :class="['d-flex flex-wrap justify-content-between align-items-center mt-auto border-top', compact ? 'py-2' : 'py-3']">
    <div :class="['col-md-4 d-flex align-items-center', horizontalPadding ? 'px-3' : '']">
      <a
        v-if="withBrandLink"
        href="index.html"
        class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
        aria-label="Kings Catalogue"
      >
        <img :src="baseUrl + 'media/crownBlack.png'" alt="Crown Icon" width="32" height="32" class="me-2">
      </a>
      <img v-else :src="baseUrl + 'media/crownBlack.png'" alt="Crown Icon" width="32" height="32" class="me-2">
      <span :class="compact ? 'mb-0 text-body-secondary' : 'mb-3 mb-md-0 text-body-secondary'">&copy; {{ currentYear }} Owen Kitchener</span>
    </div>
    <ul :class="['nav col-md-4 justify-content-end list-unstyled d-flex', compact ? 'mb-0 py-0' : '', horizontalPadding ? 'px-3' : '']">
      <li class="ms-3"><a class="text-body-secondary" href="https://www.instagram.com" aria-label="Instagram"><i class="bi bi-instagram fs-5"></i></a></li>
      <li class="ms-3"><a class="text-body-secondary" href="https://www.facebook.com" aria-label="Facebook"><i class="bi bi-facebook fs-5"></i></a></li>
      <li class="ms-3"><a class="text-body-secondary" href="https://www.twitter.com" aria-label="Twitter"><i class="bi bi-twitter fs-5"></i></a></li>
      <li class="ms-3"><a class="text-body-secondary" href="https://www.tiktok.com" aria-label="Tiktok"><i class="bi bi-tiktok fs-5"></i></a></li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: "SiteFooter",
  props: {
    baseUrl: {
      type: String,
      required: true
    },
    currentYear: {
      type: Number,
      required: true
    },
    compact: {
      type: Boolean,
      default: false
    },
    withBrandLink: {
      type: Boolean,
      default: false
    },
    horizontalPadding: {
      type: Boolean,
      default: false
    }
  }
};
</script>