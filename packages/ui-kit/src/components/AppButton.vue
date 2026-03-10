<script setup lang="ts">
import Button from 'primevue/button';

defineProps<{
  label?: string;
  icon?: string;
  severity?: 'primary' | 'secondary' | 'success' | 'info' | 'warn' | 'danger';
  outlined?: boolean;
  loading?: boolean;
  disabled?: boolean;
}>();
</script>

<template>
  <Button
    :label="label"
    :icon="icon"
    :severity="severity"
    :outlined="outlined"
    :loading="loading"
    :disabled="disabled"
  />
</template>
