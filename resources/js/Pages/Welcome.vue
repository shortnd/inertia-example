<template>
  <layout>
    <h1>Welcome</h1>
    <p>Welcome to my first Inertia.js app!</p>
    <div v-for="d in data">
        {{ d }}
    </div>
  </layout>
</template>

<script>
import Layout from '@/Shared/Layout'

export default {
    props: ['data'],
  components: {
    Layout,
  },
}
</script>
