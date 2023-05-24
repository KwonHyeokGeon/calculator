<template>
  <div class="flex flex-col justify-between">
    <div class="flex">
      <router-link to="/"><TopLogo></TopLogo></router-link>
      <div class="w-full bg-[#222831] flex h-24 items-center justify-center">
        <p class="text-white text-4xl text-center">계산기</p>
      </div>
    </div>
    <div class="flex justify-between h-52 mt-20 p-2 md:p-6">
      <router-link
        to="/PercentCal"
        class="text-4xl font-extrabold md:text-7xl lg:text-8xl hover:text-lime-300 animate__animated animate__bounce"
        @mouseover="cal = true"
        @mouseleave="cal = false"
        >&lt;Percent&gt;</router-link>
      <router-link
        to="/DdayCal"
        class="text-4xl font-extrabold md:text-7xl lg:text-8xl hover:text-lime-300 animate__animated animate__bounce"
        @mouseover="cal = true"
        @mouseleave="cal = false"
        >&lt;D-day&gt;</router-link>
    </div>
    <div class="flex justify-center items-center mt-32 pb-36">
      <p class="text-2xl md:text-5xl lg:text-7xl" :class="cal && 'text-lime-300'">Calculator</p>
    </div>
  </div>
  <Footer class="md:mt-44"></Footer>
</template>

<script>
import TopLogo from "@/components/TopLogo.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "HomePage",
  components: {
    Footer,
    TopLogo,
  },
  data() {
    return {
      cal : false
    }
  },
};
</script>

<style></style>
