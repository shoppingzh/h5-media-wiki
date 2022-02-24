import { getUserMedia } from 'tongpo/lib/media'
import { ref, onUnmounted } from 'vue'

export default function(constraints) {
  const stream = ref(null)

  const open = () => {
    return new Promise(async(resolve, reject) => {
      try {
        stream.value = await getUserMedia(constraints)
        resolve(stream.value)
      } catch (err) {
        reject(err)
      }
    })
  }

  const close = () => {
    return new Promise(async(resolve, reject) => {
      if (!stream.value) return reject('未开启')
      stream.value.getTracks().forEach(t => t.stop())
    })
  }

  onUnmounted(() => {
    close()
  })

  return {
    stream,
    open,
    close
  }
}
