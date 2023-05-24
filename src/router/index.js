import { createWebHistory, createRouter } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes:[
    {
      path:"/",
      name:"HomePage",
      component:()=> import('@/pages/HomePage')
    },
    {
      path: "/PercentCal",
      name: "PercentCal",
      component: ()=> import('@/pages/PercentCal')
    }, {
      path: "/DdayCal",
      name: "DdayCal",
      component: ()=> import('@/pages/DdayCal')
    },
  ]
})
export default router;
