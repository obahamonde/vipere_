<script setup lang="ts">
import useStore from '~/store'
const email = $ref('')
const store = useStore()

const router = useRouter()
const go = () => {
  if (email)
    router.push(`/hi/${encodeURIComponent(email)}`)
  const { data } = useFetch("/api/auth?email=" + email)
  store.setPayload(data)
}

</script> 

<template>
  <div col center>
    <h1  m-2 font-script text-4xl text-accent dark:text-warning>Vipère</h1>
    <img src="/favicon.gif" alt="logo" width="100" dark:invert animate-rotate-in />
    <input
      id="input"
      v-model="email"
      placeholder="What's your email?"
      type="email"
      autocomplete="false"
      p="x-4 y-2"
      w="250px"
      text="center"
      bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
      @keydown.enter="go"
    >

    <div>
      <button
      btn-post
        :disabled="!email"
        @click="go"
      >
        Paswordless login 
      </button>
    </div>
  </div>
</template>