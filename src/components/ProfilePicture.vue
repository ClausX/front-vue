<template>
  <span 
    class="profile-picture" 
    :style="{color: color, 'float':'right'}">
      <i class="fas fa-otter fa-4x"></i>
  </span>
</template>

<script>
export default {
    name: 'profilePicture',
    props: {
        color: String
    }
}
</script>
