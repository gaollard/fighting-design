<script setup lang="ts" name="FLoading">
  import { computed } from 'vue'
  import { Props, Emits } from './loading'
  import { FIcon } from '../../icon'
  import type { ComputedRef, CSSProperties } from 'vue'
  import type { HandleEventInterface as a } from '../../_interface'

  const prop = defineProps(Props)
  const emit = defineEmits(Emits)

  const handleClick: a = (evt: MouseEvent): void => {
    prop.close && emit('close', evt)
  }

  const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
    const { background, opacity } = prop

    return {
      background,
      opacity
    } as const
  })
</script>

<template>
  <div v-if="show" class="f-loading" :style="styleList" @click="handleClick">
    <f-icon :icon="icon || 'f-icon-loading'" class="f-loading-animation" :color="iconColor" />
    <span class="f-loading-title" :style="{ fontSize, color: fontColor }">
      {{ text || ' 玩命加载中...' }}
    </span>
  </div>
</template>
