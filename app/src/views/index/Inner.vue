<template>
  <div class="video-wrap tw-bg-gray-800">
    <video
      ref="videoIns"
      autoplay
      playsinline
      webkit-playsline
      class="tw-w-full tw-h-full tw-fit-contain" />
    
    <div class="tw-mt-10 tw-text-center">
      <a-button
        type="ghost"
        danger
        @click="handleCancel">返回</a-button>
    </div>
  </div>
</template>

<script setup>
import useMedia from '@/hooks/useMedia'
import { inject, ref, watch } from 'vue'

const emit = defineEmits(['cancel'])

const constraints = inject('constraints')
const videoIns = ref(null)
const { stream, open } = useMedia(constraints.value)

const handleCancel = () => {
  emit('cancel')
}

open()

watch([stream, videoIns], (o1, o2) => {
  if (!o1 || !o2) return
  videoIns.value.srcObject = stream.value
})

</script>

<style lang="less" scoped>
.video-wrap {
  height: 500px;
  video {
    transform: rotateY(180deg);
  }
}
</style>