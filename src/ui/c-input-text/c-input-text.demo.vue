<template>
  <h2>Default</h2>

  <c-input-text value="qsd" />

  <h2>With placeholder</h2>

  <c-input-text placeholder="Placeholder" />

  <h2>With label</h2>

  <c-input-text label="Label" mb-2 />
  <c-input-text label="Label" mb-2 label-position="left" />
  <c-input-text label="Label" mb-2 label-position="left" label-width="100px" />
  <c-input-text label="Label" mb-2 label-position="left" label-width="100px" label-align="right" />

  <h2>Readonly</h2>

  <c-input-text value="value" readonly />

  <h2>Disabled</h2>

  <c-input-text value="value" disabled />

  <h2>Validation</h2>

  <c-input-text v-model:value="value" :validation-rules="validationRules" mb-2 />
  <c-input-text v-model:value="value" :validation-rules="validationRules" mb-2 label-position="left" label="Yo " />
  <c-input-text v-model:value="value" :validation="validation" />

  <h2>Clearable</h2>

  <c-input-text v-model:value="value" clearable />
</template>

<script lang="ts" setup>
import { useValidation } from '@/composable/validation';

const value = ref('value');

const validationRules = [{ message: 'Length must be > 10', validator: (value: string) => value.length > 10 }];

const validation = useValidation({
  source: value,
  rules: validationRules,
});
</script>
