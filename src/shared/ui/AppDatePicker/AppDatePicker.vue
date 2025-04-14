<script lang="ts" setup>
import { ref } from 'vue'
import IconCalendar from '@/shared/ui/icons/IconCalendar.vue'
import './AppDatePicker.scss'

interface AppDatePickerProps {
  modelValue: string
}

interface AppDatePickerEmits {
  (e: 'update:modelValue', value: string): void
}

const props = defineProps<AppDatePickerProps>()
const emit = defineEmits<AppDatePickerEmits>()

const datepicker = ref()

const showCalendar = () => {
  datepicker.value.showPicker()
}

const getDayName = (day: string) => {
  return new Date(day).toLocaleString('ru-ru', { weekday: 'short' })
}

const getDayDate = (day: string) => {
  return new Date(day).getDate()
}

const getMonthName = (day: string) => {
  return new Date(day).toLocaleString('ru-ru', { month: 'long', day: 'numeric' }).split(' ')[1]
}

const onChange = (event: Event) => {
  if (event.target instanceof HTMLInputElement) {
    emit('update:modelValue', event.target.value)
  }
}
</script>

<template>
  <span class="AppDatePicker">
    <IconCalendar class="AppDatePicker__toggle" @click="showCalendar" />
    <input
      ref="datepicker"
      :value="props.modelValue"
      type="date"
      class="AppDatePicker__input"
      @change="onChange"
    />
    <span v-if="props.modelValue" class="AppDatePicker__date" @click="showCalendar">
      <span>{{ getDayDate(props.modelValue) }}&nbsp;</span>
      <span>{{ getMonthName(props.modelValue) }},&nbsp;</span>
      <span>{{ getDayName(props.modelValue) }}</span>
    </span>
  </span>
</template>
