<template>
    <section class="bg-[url('/public/img/hero-bg.jpg')] relative h-screen w-full bg-cover bg-center bg-fixed">
      <div class="absolute top-0 bottom-0 right-0 left-0 bg-[rgba(0,0,0,0.6)] z-10"></div>
      <div class="text-white flex justify-between items-center bg-[rgba(0,0,0,0.6)]  py-5 px-20 fixed top-0 right-0 left-0 z-30">
          <div class="flex max-sm:pl-7 max-sm:pb-2">
              <p class="text-4xl cursor-pointer">DevFolio</p>
          </div>
          <div id="mobile-menu" class="max-sm:absolute max-sm:h-screen max-sm:w-[200px] max-sm:top-0 max-sm:right-[-250px] max-sm:bg-[rgba(0,0,0,0.6)] max-sm:text-left max-sm:z-20 max-sm:duration-500">
              <i class="icon ion-md-close max-sm:block max-sm:m-[10px] hidden cursor-pointer text-2xl" @click="hidemenu"></i>
              <ul class="flex gap-7 max-sm:flex-col max-sm:items-center max-sm:m-auto max-sm:p-0">
                  <li class="after:bg-white after:h-[2px] after:w-0 after:block after:float-left after:duration-500 hover:after:w-3/4 cursor-pointer max-sm:py-[5px] max-sm:px-[50px] max-sm:duration-500 max-sm:block">HOME</li>
                  <li class="after:bg-white after:h-[2px] after:w-0 after:block after:float-left after:duration-500 hover:after:w-3/4 cursor-pointer max-sm:py-[5px] max-sm:px-[50px] max-sm:duration-500 max-sm:block">ABOUT</li>
                  <li class="after:bg-white after:h-[2px] after:w-0 after:block after:float-left after:duration-500 hover:after:w-3/4 cursor-pointer max-sm:py-[5px] max-sm:px-[50px] max-sm:duration-500 max-sm:block">SERVICES</li>
                  <li class="after:bg-white after:h-[2px] after:w-0 after:block after:float-left after:duration-500 hover:after:w-3/4 cursor-pointer max-sm:py-[5px] max-sm:px-[50px] max-sm:duration-500 max-sm:block">WORK</li>
                  <li class="after:bg-white after:h-[2px] after:w-0 after:block after:float-left after:duration-500 hover:after:w-3/4 cursor-pointer max-sm:py-[5px] max-sm:px-[50px] max-sm:duration-500 max-sm:block">BLOG</li>
                  <li class="after:bg-white after:h-[2px] after:w-0 after:block after:float-left after:duration-500 hover:after:w-3/4 cursor-pointer max-sm:py-[5px] max-sm:px-[50px] max-sm:duration-500 max-sm:block">CONTACT</li>
              </ul>
          </div>
          <i class="icon ion-md-menu text-white absolute top-0 right-0 max-sm:block max-sm:m-[10px] hidden cursor-pointer text-2xl pt-3" @click="showmenu"></i>
      </div>
      <div class="text-white text-center pt-60 absolute h-full w-full z-20">
          <p class="text-7xl">I'am Tamil selvan</p>
          <p class="text-4xl pt-5"><span id="typed" class="typed"></span></p>
      </div>
    </section>
    <about></about>
    <services></services>
    <portfolio></portfolio>
    <blog></blog>
    <contact></contact>
</template> 

<script>
import Typed from 'typed.js';
import About from '@/components/About.vue';
import Services from '@/components/Services.vue';
import Portfolio from '@/components/Portfolio.vue';
import Blog from '@/components/Blog.vue';
import Contact from '@/components/Contact.vue';
  
export default {
    components: { About, Services, Portfolio, Blog, Contact },
    name: 'Home',
  
    methods: {
      hidemenu() {
        const navbar = document.getElementById('mobile-menu');
        navbar.style.right = '-250px';
      },
      showmenu() {
        const navbar = document.getElementById('mobile-menu');
        navbar.style.right = '0';
      }
    },
  
    mounted() {
      const options = {
        strings: ["Designer", "Developer", "Freelancer", "Photographer"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
      };
  
      this.typed = new Typed('#typed', options);
    },
  
    beforeDestroy() {
      if (this.typed) {
        this.typed.destroy();
      }
    },
  }
</script>