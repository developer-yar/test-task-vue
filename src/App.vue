<template>
  <AppHeader />
  <main>
    <ScrollBlock id="home">
      <HomeSection />
    </ScrollBlock>
    <ScrollBlock id="about-us">
      <AboutUsSection />
    </ScrollBlock>
    <ScrollBlock id="frameworks">
      <FrameworksSection />
    </ScrollBlock>
    <ScrollBlock id="applications">
      <ApplicationsSection />
    </ScrollBlock>
    <ScrollBlock id="contact-us"><ContactUsSection /></ScrollBlock>
  </main>
  <AppFooter />
</template>

<script lang="ts" setup>
import AboutUsSection from "@/components/AboutUsSection.vue";
import AppFooter from "@/components/AppFooter.vue";
import AppHeader from "@/components/AppHeader.vue";
import ApplicationsSection from "@/components/ApplicationsSection.vue";
import ContactUsSection from "@/components/ContactUsSection.vue";
import FrameworksSection from "@/components/FrameworksSection.vue";
import HomeSection from "@/components/HomeSection.vue";
import ScrollBlock from "@/components/ScrollBlock.vue";
</script>

<style lang="scss">
@import "@/assets/styles/styles.scss";
</style>
