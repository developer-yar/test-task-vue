<template>
  <div class="container">
    <div class="about-us">
      <div class="about-us__text">
        <SectionTitle text="About us" />
        <SectionDescription
          text="Lorem Ipsum is simply dummy text of the
      printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown printer took a
      galley of type and scrambled it to make a type specimen book. It has
      survived not only five centuries, but also the leap into electronic
      typesetting, remaining essentially unchanged. It was popularised in the
      1960s with the release of Letraset."
        />
        <div class="about-us__buttons">
          <AppButton text="Read more" type="filled" />
          <AppButton text="Contact us" type="outlined" />
        </div>
      </div>
      <img
        class="about-us__video"
        :src="videoImage"
        alt="Video about frameworks"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import videoImage from "@/assets/about-us-video.png";
import AppButton from "@/components/AppButton.vue";
import SectionDescription from "@/components/SectionDescription.vue";
import SectionTitle from "@/components/SectionTitle.vue";
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins/background.scss";
@import "@/assets/styles/mixins/breakpoints.scss";

.container {
  @include background("@/assets/bg-about-us.png");
  inline-size: 100%;
  display: flex;
  justify-content: center;

  @include for(desktop) {
    padding-block: 90px;
    padding-inline: 32px;
  }

  @include for(tablet) {
    padding: 32px;
  }
}

.about-us {
  display: flex;
  max-inline-size: 1167px;
  inline-size: 100%;

  @include for(desktop) {
    justify-content: space-between;
    align-items: center;
    gap: 32px;
  }

  @include for(tablet) {
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: 16px;

    @include for(desktop) {
      max-inline-size: 595px;
    }

    @include for(tablet) {
      max-inline-size: none;
    }
  }

  &__buttons {
    display: flex;
    flex-wrap: wrap;

    @include for(desktop) {
      gap: 23px;
    }

    @include for(phone) {
      gap: 11.5px;
    }
  }

  &__video {
    inline-size: 100%;
    max-inline-size: 532px;
  }
}
</style>
