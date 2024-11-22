<template>
  <div class="home">
    <div class="home__text">
      <h1 class="home__title">Welcome to Test Page</h1>
      <p class="home__description">Front-end developer</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/mixins/background.scss";
@import "@/assets/styles/mixins/breakpoints.scss";

.home {
  @include background("@/assets/bg-home.png");
  inline-size: 100%;
  display: grid;
  place-content: center;

  @include for(desktop) {
    aspect-ratio: 11/5;
    max-block-size: 662px;
  }

  @include for(phone) {
    aspect-ratio: 10/16;
  }

  &__text {
    display: grid;
    gap: 4px;
  }

  &__title,
  &__description {
    font-family: "Gothic A1", serif;
    color: var(--white);
    text-align: center;
    text-shadow: 0px 1px 1px var(--black);
  }

  &__title {
    font-size: 4.5rem;
    font-weight: 700;

    @include for(phone) {
      font-size: 4rem;
    }
  }

  &__description {
    font-size: 2.25rem;
    font-weight: 400;

    @include for(phone) {
      font-size: 2rem;
    }
  }
}
</style>
