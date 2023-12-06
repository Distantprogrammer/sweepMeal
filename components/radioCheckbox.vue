<script setup>
import { ref, computed } from 'vue';
const emit = defineEmits(['update:modelValue', 'change']);
const props = defineProps({
  modelValue: {
    type: [Array, String, Number],
    default() {
      return '';
    },
  },
  value: {
    type: [Array, String, Number],
    default() {
      return '';
    },
  },
  label: {
    type: [Array, String, Number],
    default() {
      return '';
    },
  },
});
const checked = computed(() => {
  return props.modelValue === props.value;
});
// 改变值
const onChangeCheckbox = () => {
  emit('update:modelValue', props.value);
  emit('change');
};
</script>

<template>
  <div class="radioCheckbox" @click="onChangeCheckbox">
    <div class="radioCheck_icon" :class="{ is_checked: checked }"></div>
    <div class="radioCheck_lable" :class="{ is_checked: checked }">
      <slot>{{ label }}</slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$icon_heigth: 40rpx;
$checked_icon_bcColor: rgba(36, 147, 241, 1);
.radioCheckbox {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .radioCheck_icon {
    width: $icon_heigth;
    height: $icon_heigth;
    border-radius: 50%;
    background-color: #fff;
    display: inline-block;
    vertical-align: middle;
    margin-right: 8px;
    border: 2rpx solid rgba(187, 187, 187, 1);
    &.is_checked {
      background-color: $checked_icon_bcColor;
      border-color: $checked_icon_bcColor;
      position: relative;
      &::after {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 16rpx;
        height: 16rpx;
        border-radius: 50%;
        background: rgba(255, 255, 255, 1);
      }
    }
  }
  .radioCheck_lable {
    font-size: 32rpx;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    vertical-align: top;
    &.is_checked {
      color: rgba(36, 147, 241, 1);
    }
  }
}
</style>
