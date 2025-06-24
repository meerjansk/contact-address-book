<script setup>
import { defineProps } from "vue";
import ProfileName from "./ProfileName";
import ContactPhone from "./ContactPhone";
import ContactAddress from "./ContactAddress";
import ProfilePicture from "./ProfilePicture";

const props = defineProps(["contact"]);
</script>

<template>
  <article class="card">
    <ProfilePicture
      :picture="props.contact.picture"
      :name="props.contact.name"
    />
    <div>
      <ProfileName :name="props.contact.name" />
      <ContactAddress :address="props.contact.location" />
    </div>
    <ContactPhone :phone="props.contact.phone" />
  </article>
</template>

<style scoped lang="scss">
.card {
  display: flex;
  gap: 20px;
  flex-direction: column;
  padding: 20px 40px;
  margin: 0 0 20px 0;
  box-shadow: grey 0px 2px 7px;
  border-radius: 10px;
  max-width: 728px;
  align-items: center;
  background: #ffffff;
  div {
    width: 100%;
  }
}
@media (min-width: 431px) {
  .card {
    width: 48%;
    max-width: 290px;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
  }
}
@media (min-width: 641px) {
  .card {
    width: 100%;
    max-width: 728px;
    flex-direction: row;
    min-height: 203px;
    > div {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      width: 100%;
      margin-left: 20px;
      text-align: left;
      align-self: self-end;
    }
  }
}
</style>
