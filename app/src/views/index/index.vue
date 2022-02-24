<template>
  <Prepare
    v-if="stage === 0"
    @done="handlePrepareDone" />
  <Inner
    v-else-if="stage === 1"
    @cancel="stage = 0" />
</template>


<script setup>
import { ref, reactive, provide } from 'vue'
import useMedia from '@/hooks/useMedia'
import Prepare from './Prepare.vue'
import Inner from './Inner.vue'

const stage = ref(0)
const constraints = ref(null)

const handlePrepareDone = (c) => {
  constraints.value = c
  stage.value = 1
}

provide('constraints', constraints)
</script>


