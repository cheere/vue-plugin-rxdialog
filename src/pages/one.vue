<template>
  <div>
    <h1>one</h1>
    <div @click="onPush" class="cursor"> page push </div>
    <hr>
    <demo />
  </div>
</template>

<script>
import Demo from '@/components/Demo'
export default {
  components: { Demo },
  methods: {
    onPush() {
      this.$router.push('/sec')
    }
  }
}
</script>
