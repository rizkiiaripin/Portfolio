<script setup>
  import { ref } from "vue";
  const baseImagePath = import.meta.env.BASE_URL + "src/assets/images/";
  const socialMedia =[{
    name: "Instagram",
    icon: "fa-brands fa-instagram",
    link: "https://www.instagram.com/kii.76576?igsh=MTFwcXoxd24zbzI3cg==",
  },
  {
    name: "Facebook",
    icon: "fa-brands fa-facebook",
    link: "https://www.facebook.com/profile.php?id=100092078480105",
  },
  {
    name: "Whatsapp",
    icon: "fa-brands fa-whatsapp",
    link: "https://wa.me/6285797779967",
  },
  {
    name: "Linkedin",
    icon: "fa-brands fa-linkedin",
    link: "https://www.linkedin.com/in/muhamad-rizki-aripin-95327b354/",
  },
  {
    name: "Github",
    icon: "fa-brands fa-github",
    link: "https://github.com/rizkiiaripin"
    }
  ];
</script>
<template>
  <div class="my-20 mx-5 md:mx-0">
    <div class="container mx-auto w-full">
      <!-- title -->
      <div class="text-center mb-5">
        <h1 class="font-semibold mb-3 text-slate-700 text-3xl">About Me</h1>
        <p class="text-center text-slate-500">Allow me to introduce myself</p>
      </div>

      <!-- start content life -->
      <div class="grid grid-cols-1 items-center md:grid-cols-2">
        <div class="self-justify-end">
          <div
            class="scale-80 sm:scale-50 shadow-2xl -rotate-15 sm:-rotate-20 mb-5 bg-white py-3 px-10"
          >
            <img
              :src="baseImagePath + 'abouts/image-about.png'"
              alt=""
            />
          </div>
        </div>
        <div class="text-center sm:text-start">
          <h1 class="mb-2 text-lg">
            Hy I'm Muhamad Rizki Aripin - Full-Stack Web Developer
          </h1>
          <p class="mb-4 whitespace-pre-wrap">
            I'm a passionate Full-Stack Developer with expertise in both
            frontend and backend development. I love building scalable,
            high-performance web applications that are not only functional but
            also provide an excellent user experience.
            I specialize in developing modern, responsive, and efficient web
            applications from scratch or optimizing existing projects. My goal
            is to create fast, secure, and user-friendly web experiences that
            make an impact.
          </p>
          <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <div class="flex mt-4  sm:mt-0 gap-2 text-xl justify-center my-4 md:justify-start md:mx-0">
                <a
                   v-for="media in socialMedia" :key="media.name" :href=" media.link"
                  class="text-gray-500 hover:text-gray-900 flex items-center dark:hover:text-white"
                >
                  <i :class="media.icon"></i>

                </a>
                
                
               
              </div>
            </ul>
        </div>
      </div>
      <!-- end content life -->

      <!-- content i can do -->
      <div class="grid grid-cols-1">
        <div>
          <div class="grid max-w-2xl place-content-center mx-auto">
            <div
              class="text-center mb-4 flex justify-center items-center gap-4"
            >
              <span class="h-0.5 w-full bg-slate-300"></span>
              <p
                class="text-center text-lg text-slate-500 font-semibold whitespace-nowrap uppercase"
              >
                Look what I can do
              </p>
              <span class="h-0.5 w-full bg-slate-300"></span>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mx-5 md:mx-0">
              <div class="bg-white shadow-lg p-2 rounded-lg">
                <!-- body  -->
                <div>
                  <svg
                    id="bold"
                    class="h-16"
                    enable-background="new 0 0 32 32"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m26 32h-20c-3.314 0-6-2.686-6-6v-20c0-3.314 2.686-6 6-6h20c3.314 0 6 2.686 6 6v20c0 3.314-2.686 6-6 6z"
                      fill="#ffe6e2"
                    ></path>
                    <path
                      d="m21.867 13.687c-.547 0-1.047-.207-1.42-.547v2.513h-1.7c.153-.34.233-.72.233-1.107 0-1.547-1.26-2.8-2.8-2.8-1.547 0-2.8 1.253-2.8 2.8 0 .387.08.767.227 1.107h-2.053v-6.94c0-.393.32-.713.713-.713h7.467c.393 0 .713.32.713.713v1.253c.48-.433 1.153-.647 1.88-.493.82.167 1.487.853 1.633 1.68.254 1.354-.779 2.534-2.093 2.534z"
                      fill="#fd907e"
                    ></path>
                    <path
                      d="m16.925 19.328c-.249 1.358.782 2.539 2.097 2.539.547 0 1.045-.206 1.422-.548v1.97c0 .391-.32.711-.711.711h-7.465c-.391 0-.711-.32-.711-.711v-1.97c-.483.434-1.159.647-1.884.498-.818-.171-1.486-.853-1.635-1.678-.249-1.359.782-2.539 2.097-2.539.547 0 1.045.206 1.422.548v-1.825h3.441c-.576-.384-.953-1.031-.953-1.778 0-1.18.953-2.133 2.133-2.133s2.133.953 2.133 2.133c0 .747-.377 1.394-.953 1.778h3.086v1.825c-.483-.434-1.159-.647-1.884-.498-.817.17-1.486.853-1.635 1.678z"
                      fill="#fc573b"
                    ></path>
                  </svg>
                  <h1 class="my-2 text-lg font-semibold">Backend Dev</h1>
                  <p>
                    I use PHP as my programming language, with expertise in SQL
                    databases. Having a strong understanding of backend
                    concepts, such as queues and security, I focus on building
                    reliable, efficient and secure solutions.
                  </p>
                </div>
              </div>
              <div class="bg-white shadow-lg p-2 rounded-lg">
                <!-- body  -->
                <div>
                  <svg
                    id="bold"
                    class="h-16"
                    enable-background="new 0 0 32 32"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m26 32h-20c-3.314 0-6-2.686-6-6v-20c0-3.314 2.686-6 6-6h20c3.314 0 6 2.686 6 6v20c0 3.314-2.686 6-6 6z"
                      fill="#e3f8fa"
                    ></path>
                    <g fill="#8ce1eb">
                      <path
                        d="m18.569 23.431c-.876-.876-.902-1.724-.902-1.766-.001-.183-.15-.331-.333-.331h-2.68c-.184 0-.333.151-.333.335 0 .036-.012.885-.889 1.762-.095.095-.124.239-.072.363.05.125.172.206.307.206h4.667c.135 0 .257-.081.308-.206.051-.124.022-.268-.073-.363z"
                      ></path>
                      <path
                        d="m19 16.66h-6c-.184 0-.333-.149-.333-.333v-.781c0-.445.173-.864.488-1.179l.845-.846v-1.895c0-.805.27-1.599.76-2.236l.975-1.268c.126-.164.402-.164.529 0l.975 1.268c.49.637.76 1.431.76 2.236v1.895l.845.845c.315.315.488.733.488 1.179v.781c.001.184-.148.334-.332.334z"
                      ></path>
                      <path
                        d="m17.667 17.993c-.368 0-.667-.299-.667-.667v-1c0-.368.298-.667.667-.667.368 0 .667.299.667.667v1c-.001.368-.299.667-.667.667z"
                      ></path>
                      <path
                        d="m14.333 17.993c-.368 0-.667-.299-.667-.667v-1c0-.368.298-.667.667-.667.368 0 .667.299.667.667v1c0 .368-.298.667-.667.667z"
                      ></path>
                    </g>
                    <path
                      d="m22.833 10.667h-3.6c.067.313.1.64.1.96v.373h3.333v7.333h-13.333v-7.333h3.333v-.373c0-.32.033-.647.1-.96h-3.6c-.639 0-1.166.526-1.166 1.166v9c0 .64.527 1.167 1.167 1.167h13.667c.639 0 1.166-.527 1.166-1.167v-9c0-.64-.527-1.166-1.167-1.166z"
                      fill="#26c6da"
                    ></path>
                  </svg>
                  <h1 class="my-2 text-lg font-semibold">Frontend Dev</h1>
                  <p>
                    I can create a web with a suitable design from UI/UX by
                    using tailwind css for styling. then to consume API I use
                    the front end framework VUE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
