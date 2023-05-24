<template>
  <div class="flex">
    <router-link to="/" >
      <TopLogo></TopLogo>
    </router-link>
    <div class="w-full bg-[#222831] flex h-24 items-center justify-center">
      <p class="text-white text-3xl md:text-4xl text-center">퍼센트 계산기</p>
    </div>
  </div>
  <div class="flex md:max-w-7xl mx-auto animate__animated animate__bounceInDown">
    <img v-for="e in src" :key="e" :src="require(`@/assets/${e}.png`)" alt="" class="w-12 md:w-16 mx-auto py-2" />
  </div>
  <div class="md:max-w-7xl mx-auto">
    <div class="bg-[#eee] p-10 mb-5 transition-all">
      <h3 class="text-[#393E46]">퍼센트 비율 값 계산</h3>
      <input
        @input="bindNumber"
        @change="UpdateCalc"
        v-model="calc1"
        type="text"
        class="border rounded p-1 text-right"
      />
      <span class="mr-2">의</span>
      <input v-model="calc2" type="text" class="border rounded p-1 text-right" />
      <span class="mr-2 text-sm">%의 값은</span>
      <input type="text" class="border rounded p-1 text-right" :value="ResultCalcA" readonly />
      <span>입니다.</span>
    </div>
    <div class="bg-[#eee] p-10 mb-5 transition-all">
      <h3 class="text-[#393E46]">일정 값 비율 계산</h3>
      <input type="text" class="border rounded p-1 text-right" maxlength="20" v-model="calc3" /><span>의</span>
      <input type="text" class="border rounded p-1 text-right" maxlength="20" v-model="calc4" /><span>의 값은</span>
      <input type="text" class="border rounded p-1 text-right" :value="ResultCalcB" readonly /><span>%입니다.</span>
      <span class="text-xs mr-4 text-[#00ADB5]">소수점자리를 선택해주세요!</span>
      <select v-model="sosu" class="text-xs">
        <option v-for="e in 5" :key="e" :value="e">{{ e }}</option>
      </select>
    </div>
    <div class="bg-[#eee] p-10 mb-5 transition-all">
      <h3 class="text-[#393E46]">기준 > 변경값 비율 계산</h3>
      <input type="text" class="border rounded p-1 text-right" maxlength="20" v-model="calc5" /><span>에서</span>
      <input type="text" class="border rounded p-1 text-right" maxlength="20" v-model="calc6" />
      <div><span>으로 변경되면</span></div>
      <input type="text" class="border rounded p-1 text-right" :value="ResultCalcC" readonly /><span>입니다.</span>
    </div>
    <div class="bg-[#eee] p-10 mb-5 flex items-center flex-wrap transition-all">
      <h3 class="basis-full text-[#393E46]">기존 > 변경값 비율 계산</h3>
      <div class="relative">
        <input type="text" class="border rounded p-1 text-right" maxlength="20" v-model="calc7" /><span>값이</span>
        <input type="text" class="border rounded p-1 text-right" maxlength="20" v-model="calc8" /><span
          class="text-xs md:text-base"
          >%변경 될 시</span
        >
      </div>
      <div class="flex flex-col md:ml-10 md:pb-4">
        <div>
          <span class="mr-2">증가값</span>
          <input type="text" class="border rounded p-1 text-right" :value="ResultCalcD" readonly />
          <div><span>입니다.</span></div>
        </div>
        <div class="mt-5">
          <span class="mr-2">감소값</span>
          <input type="text" class="border rounded p-1 text-right" :value="ResultCalcE" readonly />
          <div><span>입니다.</span></div>
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import TopLogo from "@/components/TopLogo.vue";
import Footer from "@/components/Footer.vue";
import "animate.css";
export default {
  name:"PercentCal",
  data() {
    return {
      calc1: "",
      calc2: "",
      calc3: "",
      calc4: "",
      calc5: "",
      calc6: "",
      calc7: "",
      calc8: "",
      sosu: 3,
      src: ["percent", "down", "tag", "hand"],
    };
  },
  components: {
    Footer,
    TopLogo
  },
  methods: {
    UpdateCalc() {
      console.log("1111");
    },
    bindNumber(e) {
      this.calc1 = e.target.value;
      this.calc2 = e.target.value;
    },
  },
  computed: {
    ResultCalcA() {
      return this.calc2 === "" || this.calc1 === "" ? "" : (Number(this.calc1) * Number(this.calc2 / 100)).toFixed(3);
    },
    ResultCalcB() {
      return this.calc4 === "" || this.calc3 === ""
        ? ""
        : ((100 * Number(this.calc4)) / Number(this.calc3)).toFixed(this.sosu);
    },
    ResultCalcC() {
      let a = ((this.calc6 - this.calc5) / this.calc5) * 100;
      return this.calc6 === "" || this.calc5 === "" ? "" : a > 0 ? a.toFixed(0) + "% 증가" : a.toFixed(0) + "% 감소";
    },
    ResultCalcD() {
      return this.calc7 === "" || this.calc8 === ""
        ? ""
        : (Number(this.calc7) + Number(this.calc7) * Number(this.calc8 / 100)).toFixed(0);
    },
    ResultCalcE() {
      return this.calc7 === "" || this.calc8 === ""
        ? ""
        : (Number(this.calc7) - Number(this.calc7) * Number(this.calc8 / 100)).toFixed(0);
    },
  },
  watch: {
    calc1() {
      return (this.calc1 = this.calc1.replace(/[^0-9]/g, ""));
    },
    calc2() {
      return (this.calc2 = this.calc2.replace(/[^0-9]/g, ""));
    },
  },
};
</script>
<style></style>
