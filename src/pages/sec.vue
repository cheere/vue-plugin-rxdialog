<template>
  <div>
    <h1>sec</h1>
    <div @click="onPop" class="cursor"> page pop </div>
    <hr>
    <demo />
  </div>
</template>

<script>
import Demo from '@/components/Demo'
export default {
  components: { Demo },
  methods: {
    onPop() {
      this.$router.back()
    }
  }
}
</script>
