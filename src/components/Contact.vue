<template>
  <div class="bg-[url('../../public/img/overlay-bg.jpg')] relative w-full bg-cover bg-center bg-fixed mt-20 pt-32 pb-20">
    <div class="h-full w-full absolute top-0 left-0 opacity-50 bg-maily-blue z-10"></div>
    <div class=" relative z-20 flex gap-5 bg-white mx-36 px-10 py-12 max-sm:block max-sm:mx-5">
        <div class="w-full">
            <p class="text-3xl font-medium text-black">Send Message To Me</p>
            <div class="h-1 w-40 bg-blue-500 mr-auto mt-3"></div>
            <form class="mt-8">
                <input class="w-full mt-3 outline-none border border-gray-300 px-3 py-2 focus:border-maily-blue focus:shadow-md focus:shadow-maily-blue" type="text" name="name" placeholder="Your Name"><br>
                <input class="w-full mt-3 outline-none border border-gray-300 px-3 py-2 focus:border-maily-blue focus:shadow-md focus:shadow-maily-blue" type="email" name="email" placeholder="Your Email"><br>
                <input class="w-full mt-3 outline-none border border-gray-300 px-3 py-2 focus:border-maily-blue focus:shadow-md focus:shadow-maily-blue" type="text" name="subject" placeholder="Subject"><br>
                <textarea class="w-full mt-3 outline-none border border-gray-300 px-3 py-2 h-32 focus:border-maily-blue focus:shadow-md focus:shadow-maily-blue" name="Message" placeholder="Message"></textarea><br>
                <div class="text-center text-lg mt-5">
                    <button class="text-white bg-maily-blue py-2 px-6 rounded-full">Send Message</button>
                </div>
            </form>
        </div>
        <div class="w-full max-sm:mt-10">
            <p class="text-3xl font-medium text-black">Get in Touch</p>
            <div class="h-1 w-40 bg-blue-500 mr-auto mt-3"></div>
            <div class="mt-9 text-xl font-thin">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorum dolorem soluta quidem expedita aperiam aliquid at. Totam magni ipsum suscipit amet? Autem nemo esse laboriosam ratione nobis mollitia inventore?</p>
            </div>
            <div class="mt-4 flex gap-3">
                <div class="text-lg mt-2">
                    <div>
                        <i class="icon ion-md-pin text-maily-blue"></i>
                    </div>
                    <div class="mt-2">
                        <i class="icon ion-ios-phone-portrait text-maily-blue"></i>
                    </div>
                    <div class="mt-2">
                        <i class="icon ion-ios-mail text-maily-blue"></i>
                    </div>                    
                </div>
                <div class="text-lg mt-2 block">
                    <p>Pallavaram, Chennai</p>
                    <p class="mt-2">9876543210</p>
                    <p class="mt-2">tamilselvan@gmail.com</p>
                </div>
            </div>
            <div class="flex gap-5 mt-3">
                <i class="icon ion-logo-facebook border-4 border-maily-blue px-4 py-2 rounded-full text-2xl"></i>
                <i class="icon ion-logo-instagram border-4 border-maily-blue px-4 py-2 rounded-full text-2xl"></i>
                <i class="icon ion-logo-twitter border-4 border-maily-blue px-4 py-2 rounded-full text-xl"></i>
                <i class="icon ion-logo-linkedin border-4 border-maily-blue px-4 py-2 rounded-full text-2xl"></i>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Contact'
}
</script>