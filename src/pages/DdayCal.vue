<template>
  <div class="flex">
    <router-link to="/">
      <TopLogo></TopLogo>
    </router-link>
    <div class="w-full bg-[#222831] flex h-24 items-center justify-center">
      <p class="text-white text-4xl text-center ">디데이 계산기</p>
    </div>
  </div>
  <div class="max-w-7xl mx-auto bg-[#eee] h-[85vh] p-4 flex flex-col justify-center">
    <div class="flex justify-center">
      <input type="date" v-model="date" class="md:text-4xl text-2xl" />
    </div>
    <p class="text-4xl font-extrabold text-center mt-10">D-Day</p>
    <p class="flex justify-between mt-10 flex-none h-20 text-2xl md:text-3xl">
      <span>{{ isTimerRunning.days }}일</span>
      <span>{{ isTimerRunning.hours }}시간</span>
      <span>{{ isTimerRunning.minutes }}분</span>
      <span>{{ isTimerRunning.seconds }}초</span>
    </p>
    <div class="flex justify-between md:justify-evenly mt-10">
      <button @click="interUpdate" class="border-black border-2 rounded-md p-2 bg-slate-300 shadow-slate-600 shadow-md">
        카운트 시작
      </button>
      <button @click="clearUpdate" class="border-black border-2 rounded-md p-2 bg-slate-300 shadow-slate-600 shadow-md">
        타이머 초기화
      </button>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import TopLogo from "@/components/TopLogo.vue";
import Footer from "@/components/Footer.vue";

export default {
  data() {
    return {
      dateDifference: null,
      date: null,
      isTimerRunning: "",
      interDate: "",
      countValid: false,
      dateInput: false
    };
  },
  name: "DdayCal",
  components: {
    TopLogo,
    Footer,
  },
  methods: {
    interUpdate() {
      if (this.date) {
        this.dateInput = false
        this.setUpdate();
        this.interDate = setInterval(() => {
          this.setUpdate();
        }, 1000);
      } else {
        this.dateInput = true
      }
    },
    setUpdate() {
      const now = new Date();
      const selectedDate = new Date(this.date).setHours(0, 0, 0, 0);
      const timeDifference = selectedDate - now;
      const seconds = Math.floor(timeDifference / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      this.timeDifference = {
        days: days,
        hours: hours % 24,
        minutes: minutes % 60,
        seconds: seconds % 60,
      };
      this.isTimerRunning = this.timeDifference;
    },
    clearUpdate() {
      clearInterval(this.interDate);
      this.date = this.isTimerRunning = "";
    },
  },
  watch: {
    date(newval, oldval) {
      if (oldval === null) {
        this.countValid = true;
      } else if (newval !== oldval) {
        clearInterval(this.interDate)
        this.isTimerRunning = "";
      }
    },
  },
};
</script>

<style></style>
