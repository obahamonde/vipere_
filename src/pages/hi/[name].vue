<script setup lang="ts">
import useStore from '~/store'
const props = defineProps<{ name: string }>()
const router = useRouter()
const state = useStore()
watchEffect(() => {
  state.setName(props.name)
})
router.afterEach(()=>{
  state.addPage(router.currentRoute.value.path)
})
</script>

<template>
  <div>
    <div i-carbon-pedestrian text-4xl inline-block />
    <p>
      Hi, {{ props.name }}
    </p>
    <p text-sm op50>
      <em>Dynamic route!</em>
    </p>

    <div>
      <button
        class="btn m-3 text-sm mt-8"
        @click="router.back()"
      >
        Back
      </button>
    </div>


  </div>
</template>
