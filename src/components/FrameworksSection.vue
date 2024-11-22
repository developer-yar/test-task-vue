<template>
  <div class="container">
    <div class="frameworks">
      <SectionTitle text="Frameworks" />
      <FrameworkItem
        v-for="framework in frameworks"
        :key="framework.id"
        :id="framework.id"
        :title="framework.title"
        :description="framework.description"
        :image="framework.image"
        :direction="framework.direction"
      />
    </div>
  </div>
  <div class="cards">
    <CardItem
      v-for="card in cards"
      :key="card.id"
      :id="card.id"
      :title="card.title"
      :description="card.description"
      :buttonText="card.buttonText"
      :image="card.image"
    />
  </div>
</template>

<script setup lang="ts">
import angularImage from "@/assets/angular.png";
import meetingImage from "@/assets/meeting.png";
import questionImage from "@/assets/question.png";
import reactImage from "@/assets/react.png";
import vueImage from "@/assets/vue.png";
import CardItem from "@/components/CardItem.vue";
import FrameworkItem from "@/components/FrameworkItem.vue";
import SectionTitle from "@/components/SectionTitle.vue";
import { ICardItem } from "@/models/ICardItem";
import { IFrameworkItem } from "@/models/IFrameworkItem";

const frameworks: IFrameworkItem[] = [
  {
    id: 0,
    title: "Vue js",
    description:
      "Vue.js is an open source JavaScript framework for creating user interfaces. It is easily integrated into projects using other JavaScript libraries. It can function as a web framework for developing single-page applications in a reactive style.",
    image: vueImage,
    direction: "left-to-right",
  },
  {
    id: 1,
    title: "React js",
    description:
      "React is an open source JavaScript library for developing user interfaces. Instagram Facebook, React is developed and supported by a community of individual developers and corporations. React can be used to develop single-page and mobile applications.",
    image: reactImage,
    direction: "right-to-left",
  },
  {
    id: 2,
    title: "Angular js",
    description:
      "AngularJS is an open source JavaScript framework. Designed for the development of single-page applications. Its goal is to expand browser applications based on the MVC template, as well as simplify testing and development.",
    image: angularImage,
    direction: "left-to-right",
  },
];

const cards: ICardItem[] = [
  {
    id: 0,
    title: "Setup a Meeting",
    description:
      "Fill out our contact form and have someone get back to you within 24 hours.",
    buttonText: "Schedule a Meeting",
    image: meetingImage,
  },
  {
    id: 1,
    title: "Ask a Question",
    description:
      "Have a question? Just fill out our contact us form and we will get back to you.",
    buttonText: "Ask a Question",
    image: questionImage,
  },
];
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins/background.scss";
@import "@/assets/styles/mixins/breakpoints.scss";

.container {
  background-color: var(--pale-gray);
}

.frameworks {
  max-inline-size: 1196px;
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  @include for(desktop) {
    gap: 45px;
    padding-block: 44px;
  }

  @include for(phone) {
    gap: 16px;
    padding-block: 32px;
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
}

.cards {
  max-inline-size: 1216px;
  margin: auto;
  display: flex;
  justify-content: space-between;

  @include for(tablet) {
    flex-direction: column;
    gap: 16px;
  }
}
</style>
