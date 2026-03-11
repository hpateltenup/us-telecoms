<script setup lang="ts">
import Dialog from 'primevue/dialog';

defineOptions({ inheritAttrs: false });
</script>

<template>
  <Dialog v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps ?? {}" />
    </template>
  </Dialog>
</template>
