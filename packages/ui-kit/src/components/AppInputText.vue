<script setup lang="ts">
import InputText from 'primevue/inputtext';
import { useTemplateRef } from 'vue';

defineOptions({ inheritAttrs: false });

const inputRef = useTemplateRef<InstanceType<typeof InputText>>('inputRef');

defineExpose({
  focus: () => inputRef.value?.$el?.focus(),
  blur: () => inputRef.value?.$el?.blur(),
});
</script>

<template>
  <InputText ref="inputRef" v-bind="$attrs" />
</template>
