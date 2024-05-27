<template>
  <div class="pb-10">
    <div class="text-center">
        <p class="text-5xl font-bold text-black">SERVICES</p>
        <p class="text-sm mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div class="h-1 w-12 bg-blue-500 mx-auto mt-3"></div>
    </div>
    <div class="grid grid-cols-3 mt-10 gap-x-5 gap-y-10 mx-28 max-sm:block max-sm:mx-2">
        <div v-for="service in services" :key="service" class="bg-white pt-20 pb-12 px-6 text-center rounded-xl shadow-md max-sm:mt-5">
            <i class="text-5xl border-8 border-blue-500 hover:bg-blue-500 hover:text-white hover:duration-500 hover:border-blue-100 rounded-full" :class="[service.icon]"></i>
            <div class="mt-12">
                <p class="text-xl font-medium mb-3">{{ service.title }}</p>
            </div>
            <div>
                <p>{{ service.content }}</p>
            </div>
        </div>
    </div>
    <div class="mt-10 bg-[url('/public/img/counters-bg.jpg')] relative w-full h-[400px] max-sm:h-[700px] max-sm:pt-24 bg-cover bg-center bg-fixed">
        <div class="h-full w-full absolute top-0 left-0 opacity-65 bg-maily-blue z-10"></div>
        <div class="absolute w-full h-full flex gap-52 justify-center items-center z-20 max-sm:block">
            <div v-for="serv in servs" :key="serv" class="text-white text-center max-sm:mt-10">
                <i class="text-3xl border-8 border-white rounded-full px-6 py-4" :class="[serv.icon]"></i>
                <p class="mt-10 max-sm:mt-10">{{ serv.count }}</p>
                <p>{{ serv.title }}</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Services',
    data() {
        return {
            services: [
                { title: 'WEB DESIGN', icon: 'icon ion-ios-briefcase py-5 px-8', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.' },
                { title: 'WEB DEVELOPMENT', icon: 'icon ion-ios-card py-5 px-8', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.' },
                { title: 'PHOTOGRAPHY', icon: 'icon ion-ios-camera py-5 px-9', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.' },
                { title: 'RESPONSIVE DESIGN', icon: 'icon ion-ios-search py-5 px-9', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.' },
                { title: 'APP DESIGN', icon: 'icon ion-md-appstore py-6 px-9', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.' },
                { title: 'MARKETING SERVICES', icon: 'icon ion-md-calendar py-5 px-9', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.' },
            ],
            servs: [
                { title: 'WORK COMPLETED', count: 15, icon: 'icon ion-md-checkmark' },
                { title: 'YEARS OF EXPERIENCE', count: 1, icon: 'icon ion-md-paper' },
                { title: 'TOTAL CLIENTS', count: 12, icon: 'icon ion-md-people' },
            ]
        }
    },
}
</script>