<script lang="ts" setup>
import type { AstroGlobal } from "astro";
import type { AnchorHTMLAttributes } from "vue";

interface Props extends AnchorHTMLAttributes {
  url: AstroGlobal["url"];
}

const {
  url: { pathname },
  class: className,
  href,
} = defineProps<Props>();

const isActive = href === pathname || href === pathname.replace(/\/$/, "");
</script>
<template>
  <a :href="href" :class="[className, { active: isActive }]" v-bind="$attrs">
    <slot />
  </a>
</template>
<style>
a {
  display: inline-block;
  text-decoration: none;
}
a.active {
  font-weight: bolder;
  text-decoration: underline;
}
</style>
