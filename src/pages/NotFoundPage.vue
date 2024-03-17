<template>
  <div class="not-found-page">
    <header>
      <h2>The page you are trying to access does not exist</h2>
    </header>
    <main>
      <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.not-found-page {
  padding: var(--spacing-large);
  text-align: center;

  i {
    font-size: 100px;
  }
}
</style>
