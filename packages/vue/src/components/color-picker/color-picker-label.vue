<script lang="ts">
import type { LabelHTMLAttributes } from 'vue'
import type { PolymorphicProps } from '../factory'

export interface ColorPickerLabelProps
  extends PolymorphicProps,
    /**
     * @vue-ignore
     */
    LabelHTMLAttributes {}
</script>

<script setup lang="ts">
import { ark } from '../factory'
import { useColorPickerContext } from './use-color-picker-context'

defineProps<ColorPickerLabelProps>()
const colorPicker = useColorPickerContext()
</script>

<template>
  <ark.label v-bind="colorPicker.labelProps" :as-child="asChild">
    <slot />
  </ark.label>
</template>
