<script lang="ts" setup>
import './AppSwitch.scss'

interface AppSwitchProps {
  modelValue?: boolean
  activeText?: string
  inactiveText?: string
}

interface AppSwitchEmits {
  (e: 'update:modelValue', value: boolean): void
}

const props = defineProps<AppSwitchProps>()
const emit = defineEmits<AppSwitchEmits>()

const toggleActive = () => {
  emit('update:modelValue', !props.modelValue)
}
</script>

<template>
  <button
    type="button"
    class="AppSwitch"
    :class="{ AppSwitch_active: props.modelValue }"
    @click="toggleActive"
  >
    <div v-if="props.inactiveText" class="AppSwitch__inactiveText">
      {{ props.inactiveText }}
    </div>
    <div class="AppSwitch__control" />
    <div v-if="props.activeText" class="AppSwitch__activeText">
      {{ props.activeText }}
    </div>
  </button>
</template>
