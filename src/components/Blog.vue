<template>
  <div class="pb-10">
    <div class="text-center">
        <p class="text-5xl font-bold text-black">BLOG</p>
        <p class="text-sm mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div class="h-1 w-12 bg-blue-500 mx-auto mt-3"></div>
    </div>
    <div class="mt-10 grid grid-cols-3 mx-28 gap-x-5 gap-y-10 max-sm:block max-sm:mx-2">
        <div v-for="blog in blogs" :key="blog" class="bg-white shadow-md rounded-b-lg max-sm:mt-5">
            <img :src="blog.img">
            <div class="text-center">
                <p class="bg-maily-blue px-3 text-xs text-white py-2 font-medium rounded-lg -mt-4 z-20 relative max-sm:mx-32 mx-40" :class="{ 'mx-44': blog.work === 'TRAVEL' }">{{ blog.work }}</p>
            </div>
            <div class="pt-4 px-5 pb-7">
                <p class="text-xl font-medium text-black pb-1">{{ blog.title }}</p>
                <p>{{ blog.content }}</p>
            </div>
            <div class="flex justify-between bg-gray-100 py-2 px-5 rounded-b-lg">
                <div class="flex gap-2">
                    <img class="rounded-full" src="../../public/img/testimonial-2.jpg" height="30" width="30">
                    <p class="text-lg">Tamil Selvan</p>
                </div>
                <div class="flex gap-2">
                    <i class="icon ion-md-time text-lg"></i>
                    <p>{{ blog.timing }}</p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Blog',
    data() {
        return {
             blogs: [
                { img: '../../public/img/post-1.jpg', work: 'TRAVEL', title: 'See more ideas about Travel', content: 'Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.', timing: '10min' },
                { img: '../../public/img/post-2.jpg', work: 'WEB DESIGN', title: 'See more ideas about Travel', content: 'Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.', timing: '10min' },
                { img: '../../public/img/post-3.jpg', work: 'WEB DESIGN', title: 'See more ideas about Travel', content: 'Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.', timing: '10min' },
             ]
        }
    },
}
</script>

<style>

</style>