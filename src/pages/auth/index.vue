<script setup lang="ts">import useStore from '~/store';

const url = ref("/api/user_info?token=")
const token = useRoute().query.token
const { data } = useFetch(url.value + token + "&email=" + useRoute().query.email)

</script>

<template>
<div>{{data}}</div>
</template>