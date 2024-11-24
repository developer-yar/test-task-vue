<template>
  <div class="container">
    <div class="applications">
      <SectionTitle class="applications__title" text="Applications" />
      <ApplicationCard
        v-for="application in applications"
        :key="application.id"
        :id="application.id"
        :image="application.image"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import application1Image from "@/assets/application-1.png";
import application2Image from "@/assets/application-2.png";
import application3Image from "@/assets/application-3.png";
import application4Image from "@/assets/application-4.png";
import application5Image from "@/assets/application-5.png";
import application6Image from "@/assets/application-6.png";
import application7Image from "@/assets/application-7.png";
import application8Image from "@/assets/application-8.png";
import ApplicationCard from "@/components/ApplicationCard.vue";
import SectionTitle from "@/components/SectionTitle.vue";
import { IApplicationCardItem } from "@/models/IApplicationCardItem";

const applications: IApplicationCardItem[] = [
  {
    id: 1,
    image: application1Image,
  },
  {
    id: 2,
    image: application2Image,
  },
  {
    id: 3,
    image: application3Image,
  },
  {
    id: 4,
    image: application4Image,
  },
  {
    id: 5,
    image: application5Image,
  },
  {
    id: 6,
    image: application6Image,
  },
  {
    id: 7,
    image: application7Image,
  },
  {
    id: 8,
    image: application8Image,
  },
];
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins/breakpoints.scss";

.container {
  background-color: var(--pale-gray);

  @include for(desktop) {
    padding: 45px;
  }

  @include for(tablet) {
    padding-block: 32px;
    padding-inline: 16px;
  }

  @include for(phone) {
    padding-inline: 0px;
  }
}

.applications {
  $minColumn: 227px;
  $columnCount: 4;
  $columnDesktopGap: 96px;

  max-inline-size: ($minColumn * 4) + ($columnDesktopGap * ($columnCount - 1));
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax($minColumn, 1fr));
  gap: 45px $columnDesktopGap;

  @include for(tablet) {
    gap: 32px;
  }

  &__title {
    text-align: center;
    grid-column: 1/-1;
  }
}
</style>
