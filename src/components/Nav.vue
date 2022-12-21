<script lang="tsx" setup>
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark();

const toggleSunIcon = useToggle(isDark);

const links = ["home", "about", "projects"];

const linkTextAndHrefMap = links.map((link) => ({
  href: link !== "home" ? `/${link}` : "/",
  text: link,
}));
</script>

<template>
  <nav
    class="bg-blue-800 dark:bg-blue-200 dark:text-gray-800 text-gray-200 py-3 px-9"
  >
    <div data-content class="flex justify-between items-center relative">
      <button class="p-2" @click="toggleSunIcon()">
        <div class="transition-opacity duration-500 ease-in hover:opacity-80">
          <div v-show="isDark">
            <SunIcon class="w-10 text-orange-500" area-label="Sun Icon" />
            <div class="text-sm sr-only">Click to trigger dark mode</div>
          </div>

          <div v-show="!isDark">
            <MoonIcon class="w-10 text-purple-500" area-label="Moon Icon" />
            <div class="text-sm sr-only">Click to trigger light mode</div>
          </div>
        </div>
      </button>

      <div id="nav-links" class="space-x-4">
        <template v-for="{ href, text } of linkTextAndHrefMap">
          <a :href="href" class="capitalize inline-block py-1 px-3">
            {{ text }}
          </a>
        </template>
      </div>
    </div>
  </nav>
</template>

<script lang="tsx">
export default {
  components: {
    SunIcon(_, { attrs }) {
      return (
        <svg viewBox="0 0 36 36" {...attrs}>
          <path
            fill="currentColor"
            d="M18 6.42a1 1 0 0 0 1-1V1.91a1 1 0 0 0-2 0v3.51a1 1 0 0 0 1 1Z"
            class="clr-i-solid clr-i-solid-path-1"
          ></path>
          <path
            fill="currentColor"
            d="M18 29.58a1 1 0 0 0-1 1v3.51a1 1 0 0 0 2 0v-3.51a1 1 0 0 0-1-1Z"
            class="clr-i-solid clr-i-solid-path-2"
          ></path>
          <path
            fill="currentColor"
            d="M8.4 9.81A1 1 0 0 0 9.81 8.4L7.33 5.92a1 1 0 0 0-1.41 1.41Z"
            class="clr-i-solid clr-i-solid-path-3"
          ></path>
          <path
            fill="currentColor"
            d="M27.6 26.19a1 1 0 0 0-1.41 1.41l2.48 2.48a1 1 0 0 0 1.41-1.41Z"
            class="clr-i-solid clr-i-solid-path-4"
          ></path>
          <path
            fill="currentColor"
            d="M6.42 18a1 1 0 0 0-1-1H1.91a1 1 0 0 0 0 2h3.51a1 1 0 0 0 1-1Z"
            class="clr-i-solid clr-i-solid-path-5"
          ></path>
          <path
            fill="currentColor"
            d="M34.09 17h-3.51a1 1 0 0 0 0 2h3.51a1 1 0 0 0 0-2Z"
            class="clr-i-solid clr-i-solid-path-6"
          ></path>
          <path
            fill="currentColor"
            d="m8.4 26.19l-2.48 2.48a1 1 0 0 0 1.41 1.41l2.48-2.48a1 1 0 0 0-1.41-1.41Z"
            class="clr-i-solid clr-i-solid-path-7"
          ></path>
          <path
            fill="currentColor"
            d="m27.6 9.81l2.48-2.48a1 1 0 0 0-1.41-1.41L26.19 8.4a1 1 0 0 0 1.41 1.41Z"
            class="clr-i-solid clr-i-solid-path-8"
          ></path>
          <circle
            cx="18"
            cy="18"
            r="10"
            fill="currentColor"
            class="clr-i-solid clr-i-solid-path-9"
          ></circle>
          <path fill="none" d="M0 0h36v36H0z"></path>
        </svg>
      );
    },
    MoonIcon(_, { attrs }) {
      return (
        <svg {...attrs} viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22C6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z"
          ></path>
        </svg>
      );
    },
  },
};
</script>
