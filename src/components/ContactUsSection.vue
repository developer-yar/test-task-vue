<template>
  <div class="contact-us">
    <SectionTitle class="contact-us__title" text="Contact Us" />
    <form class="contact-us__form form">
      <div class="form__field">
        <AppFormLabel text="First Name" :required="true" />
        <AppFormInput
          v-model="userData.firstName"
          @input.once="setIsTouched('firstName')"
          placeholder="Enter Your First Name"
        />
        <AppFormError v-if="isEmptyFirstName" text="First name required" />
      </div>
      <div class="form__field">
        <AppFormLabel text="Last Name" :required="true" />
        <AppFormInput
          v-model="userData.lastName"
          @input.once="setIsTouched('lastName')"
          placeholder="Enter Your Last Name"
        />
        <AppFormError v-if="isEmptyLastName" text="Last name required" />
      </div>
      <div class="form__field">
        <AppFormLabel text="Company" :required="true" />
        <AppFormInput
          v-model="userData.company"
          @input.once="setIsTouched('company')"
          placeholder="Enter Your Company"
        />
        <AppFormError v-if="isEmptyCompany" text="Company required" />
      </div>
      <div class="form__field">
        <AppFormLabel text="Email" :required="true" />
        <AppFormInput
          v-model="userData.email"
          @input.once="setIsTouched('email')"
          placeholder="Enter Your Email"
        />
        <AppFormError v-if="isEmptyEmail" text="Email required" />
        <AppFormError v-else-if="isInvalidEmail" text="Incorrect email" />
      </div>
      <div class="form__field">
        <AppFormLabel text="Job Title" :required="true" />
        <AppFormInput
          v-model="userData.jobTitle"
          @input.once="setIsTouched('jobTitle')"
          placeholder="Enter Job Title"
        />
        <AppFormError v-if="isEmptyJobTitle" text="Job title required" />
      </div>
      <div class="form__field">
        <AppFormLabel text="Country" />
        <AppFormInput
          v-model="userData.country"
          placeholder="Enter Your Country"
        />
      </div>
      <div class="form__field">
        <AppFormLabel text="State" :required="true" />
        <AppFormInput
          v-model="userData.state"
          @input.once="setIsTouched('state')"
          placeholder="Enter Your State"
        />
        <AppFormError v-if="isEmptyState" text="State required" />
      </div>
      <div class="form__field">
        <AppFormLabel text="Zip Code" :required="true" />
        <AppFormInput
          v-model="userData.zipCode"
          @input.once="setIsTouched('zipCode')"
          placeholder="Enter Your Zip Code"
        />
        <AppFormError v-if="isEmptyZipCode" text="Zip code required" />
        <AppFormError v-else-if="isInvalidZipCode" text="Incorrect zip code" />
      </div>
      <div class="form__field">
        <AppButton text="Submit" @click.prevent="submitForm" />
      </div>
    </form>
    <div class="modal" v-if="isModalOpened">
      <div class="modal__body">
        <SectionTitle text="Your form has been successfully submitted" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import AppButton from "@/components/AppButton.vue";
import AppFormError from "@/components/AppFormError.vue";
import AppFormInput from "@/components/AppFormInput.vue";
import AppFormLabel from "./AppFormLabel.vue";
import SectionTitle from "./SectionTitle.vue";
import { IUserData } from "@/models/IUserData";
import { validatedFields } from "@/models/validatedFields";

const isModalOpened = ref<boolean>(false);

const userData = reactive<IUserData>({
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  jobTitle: "",
  country: "",
  state: "",
  zipCode: "",
});

const isTouched = reactive<Record<validatedFields, boolean>>({
  firstName: false,
  lastName: false,
  company: false,
  email: false,
  jobTitle: false,
  state: false,
  zipCode: false,
});

const setIsTouched = (key: validatedFields): void => {
  isTouched[key] = true;
};

const isEmpty = (key: validatedFields): boolean =>
  userData[key].trim() === "" && isTouched[key];

const isInvalid = (key: validatedFields, regex: RegExp): boolean =>
  !regex.test(userData[key]) && isTouched[key];

const isEmptyFirstName = computed(() => isEmpty("firstName"));
const isEmptyLastName = computed(() => isEmpty("lastName"));
const isEmptyCompany = computed(() => isEmpty("company"));
const isEmptyEmail = computed(() => isEmpty("email"));
const isEmptyJobTitle = computed(() => isEmpty("jobTitle"));
const isEmptyState = computed(() => isEmpty("state"));
const isEmptyZipCode = computed(() => isEmpty("zipCode"));

const isInvalidEmail = computed(() =>
  isInvalid("email", /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm)
);
const isInvalidZipCode = computed(() =>
  isInvalid("zipCode", /^(?!0{3})\d{5}(?:-?\d{4})?$/)
);

const isValidForm = computed(
  () =>
    !isEmptyFirstName.value &&
    !isEmptyLastName.value &&
    !isEmptyCompany.value &&
    !isEmptyEmail.value &&
    !isInvalidEmail.value &&
    !isEmptyJobTitle.value &&
    !isEmptyState.value &&
    !isEmptyZipCode.value &&
    !isInvalidZipCode.value &&
    Object.values(isTouched).filter((value) => value).length ===
      Object.values(isTouched).length
);

const submitForm = (): void => {
  if (!isValidForm.value) {
    Object.keys(isTouched).map(
      (key: string) => (isTouched[key as validatedFields] = true)
    );
  } else {
    Object.keys(userData).map((key: string) => {
      userData[key as keyof IUserData] = "";
    });

    Object.keys(isTouched).map(
      (key: string) => (isTouched[key as validatedFields] = false)
    );

    isModalOpened.value = true;

    setTimeout(() => {
      isModalOpened.value = false;
    }, 3000);
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins/breakpoints.scss";

.contact-us {
  max-inline-size: 1220px;
  margin: auto;

  @include for(desktop) {
    padding-block: 44px 60px;
    padding-inline: 32px;
  }

  @include for(tablet) {
    padding-block: 32px 48px;
    padding-inline: 16px;
  }

  &__title {
    text-align: center;

    @include for(desktop) {
      margin-block-end: 44px;
    }

    @include for(tablet) {
      margin-block-end: 32px;
    }
  }
}

.form {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));

  @include for(desktop) {
    gap: 20px 14px;
  }

  @include for(tablet) {
    gap: 16px 12px;
  }

  &__field {
    display: grid;
    align-content: start;
    gap: 6px;

    &:not(:last-child) {
      @include for(desktop) {
        min-block-size: 92px;
      }

      @include for(tablet) {
        min-block-size: 84.5px;
      }
    }

    &:last-child {
      grid-column: 1/-1;
      justify-self: center;
    }
  }
}

.modal {
  position: fixed;
  inset: 0;
  inline-size: 100vw;
  block-size: 100vh;
  background-color: rgba(0, 0, 0, 0.25);
  display: grid;
  place-content: center;

  &__body {
    background-color: var(--white);
    inline-size: 100%;
    min-inline-size: 320px;
    padding: 64px;
  }
}
</style>
