<script>
import data from '../data/temp.json';

export default {
  name: 'App',
  data() {
    return {
      data,
      message: 'Привет, Vue',
    };
  },
};
</script>

<template lang="pug">
	h1 {{data}}
</template>
