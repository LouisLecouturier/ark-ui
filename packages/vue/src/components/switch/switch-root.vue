<script lang="ts">
import type { LabelHTMLAttributes } from 'vue'
import type { BooleanDefaults } from '../../types'
import type { RootEmits, RootProps } from './switch.types'

export interface SwitchRootProps
  extends RootProps,
    PolymorphicProps,
    /**
     * @vue-ignore
     */
    LabelHTMLAttributes {}
export interface SwitchRootEmits extends RootEmits {}
</script>

<script setup lang="ts">
import { ark, type PolymorphicProps } from '../factory'
import { useSwitch } from './use-switch'
import { SwitchProvider } from './use-switch-context'

const props = withDefaults(defineProps<SwitchRootProps>(), {
  checked: undefined,
  defaultChecked: undefined,
  disabled: undefined,
  invalid: undefined,
  readOnly: undefined,
  required: undefined,
} satisfies BooleanDefaults<RootProps>)

const emits = defineEmits<SwitchRootEmits>()

const context = useSwitch(props, emits)
SwitchProvider(context)
</script>

<template>
  <ark.label v-bind="context.rootProps" :as-child="asChild">
    <slot />
  </ark.label>
</template>
