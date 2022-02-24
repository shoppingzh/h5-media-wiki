<template>
  <div class="tw-p-2">
    <div class="prepare tw-mt-10 tw-px-4 tw-py-6 tw-bg-white tw-shadow-md tw-rounded-md">
      <a-form
        :model="form"
        class="tw-p-4 tw-bg-white"
        :label-col="{ span: 8 }"
        label-align="left">
        <a-form-item label="分辨率宽度">
          <a-input-number
            v-model:value="form.width"
            style="width: 200px;" />
        </a-form-item>
        <a-form-item label="分辨率高度">
          <a-input-number
            v-model:value="form.height"
            style="width: 200px;" />
        </a-form-item>
        <a-form-item label="开启分辨率强制要求">
          <div>
            <a-switch v-model:checked="form.enableExact" />
            <span class="tw-ml-5 tw-text-xs tw-text-gray-400">注：不能使用时将发生错误</span>
          </div>
        </a-form-item>
        <template v-if="form.enableExact">
          <a-form-item label="强制要求分辨率宽度">
            <a-input-number v-model:value="form.minWidth" /> <span class="tw-px-4">~</span> <a-input-number v-model:value="form.maxWidth" />
          </a-form-item>
          <a-form-item label="强制要求分辨率高度">
            <a-input-number v-model:value="form.minHeight" /> <span class="tw-px-4">~</span> <a-input-number v-model:value="form.maxHeight" />
          </a-form-item>
        </template>
        <a-form-item label="摄像头模式">
          <a-radio-group v-model:value="form.facingMode">
            <a-radio value="user">前置摄像头</a-radio>
            <a-radio value="environment">后置摄像头</a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item label="强制使用摄像头模式">
          <a-switch v-model:checked="form.enableFacingModeForce" />
          <span class="tw-ml-5 tw-text-xs tw-text-gray-400">注：不能使用时将发生错误</span>
        </a-form-item>
        <a-form-item label="开启声音录制">
          <a-switch v-model:checked="form.enableAudio" />
        </a-form-item>
      </a-form>
      <div class="tw-mt-10 tw-text-center">
        <a-button
          type="primary"
          @click="handleDone">准备好了，GO！</a-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, reactive, ref } from 'vue'

const emit = defineEmits(['done'])

const form = reactive({
  width: 1000,
  height: 500,
  enableExact: false,
  minWidth: null,
  maxWidth: null,
  minHeight: null,
  maxHeight: null,
  enableAudio: false,
  facingMode: 'user',
  enableFacingModeForce: true
})

const handleDone = () => {
  const c = {
    video: {
      width: {
        ideal: form.width
      },
      height: {
        ideal: form.height
      }
    },
    audio: form.enableAudio,
    facingMode: form.enableFacingModeForce ? { exact: form.facingMode } : form.facingMode
  }

  if (form.enableExact) {
    form.minWidth && (c.video.width.min = form.minWidth)
    form.maxWidth && (c.video.width.max = form.maxWidth)
    form.minHeight && (c.video.height.min = form.minHeight)
    form.maxHeight && (c.video.height.min = form.maxHeight)
  }

  console.log(c)

  emit('done', c)
}

</script>

<style scoped>
  .prepare {
    margin-left: auto;
    margin-right: auto;
    min-width: 300px;
    max-width: 500px;
  }
</style>