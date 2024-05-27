<template>
  <div class="pb-10">
    <div class="text-center">
        <p class="text-5xl font-bold text-black">PORTFOLIO</p>
        <p class="text-sm mt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <div class="h-1 w-12 bg-blue-500 mx-auto mt-3"></div>
    </div>
    <div class="grid grid-cols-3 mx-28 gap-x-5 gap-y-10 mt-10 max-sm:block max-sm:mx-2">
        <div v-for="portfolio in portfolios" :key="portfolio" class="bg-white shadow-md max-sm:mt-7">
            <img :src="portfolio.img">
            <div class="px-5 pt-10 pb-7">
                <p class="text-xl font-medium text-black pb-2">{{ portfolio.title }}</p>
                <div class="flex justify-between">                    
                    <p class="text-sm"><span class="text-maily-blue">{{ portfolio.work }}</span> / <span class="text-gray-500">{{ portfolio.date }}</span></p>
                    <i class="icon ion-md-add text-3xl text-maily-blue border-4 border-maily-blue px-2.5 rounded-full -mt-7"></i>
                </div>                
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Portfolio',
    data() {
        return {
            portfolios: [
                { img: '../../public/img/work-1.jpg', title: 'Lorem impsum dolor', work: 'Web Design', date: '23 may.2024' },
                { img: '../../public/img/work-2.jpg', title: 'Loreda Cuno Nere', work: 'Web Design', date: '23 may.2024' },
                { img: '../../public/img/work-3.jpg', title: 'Mavrito Lana Dere', work: 'Web Design', date: '23 may.2024' },
                { img: '../../public/img/work-4.jpg', title: 'Bindo Laro Cado', work: 'Web Design', date: '23 may.2024' },
                { img: '../../public/img/work-5.jpg', title: 'Studio Lena Mado', work: 'Web Design', date: '23 may.2024' },
                { img: '../../public/img/work-6.jpg', title: 'Studio Big Bang', work: 'Web Design', date: '23 may.2024' },
            ]
        }
    },
}
</script>