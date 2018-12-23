<template>
  <VApp>
    <VToolbar app>
      <VToolbarTitle class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">
          MATERIAL DESIGN
        </span>
      </VToolbarTitle>
      <VSpacer />
      <VBtn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">
          Latest Release
        </span>
        <VIcon>open_in_new</VIcon>
      </VBtn>
    </VToolbar>

    <VContent>
      <RouterView />
    </VContent>
  </VApp>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      //
    };
  },
};
</script>
