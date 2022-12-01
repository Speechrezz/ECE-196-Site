<script>
  import Navbar from "$lib/comp/Navbar.svelte";
	import Footer from "$lib/comp/Footer.svelte";

  let scroll;
</script>

<svelte:window bind:scrollY={scroll} />

<Navbar index={0}/>

<main class='flex flex-col bg-neutral-1 md:bg-transparent'>
  <div class='md:bg-[url("/img/HeroBG.webp")] md:bg-cover w-full h-[42rem] absolute -z-10' 
    style:transform="translateY({scroll * 0.15 + 10}px)"/>
  <div class='w-full flex justify-center'>
    <div class='w-main flex flex-col md:flex-row md:justify-between'>
      <div class='md:w-96 text-center md:text-left'>
        <h1 class='text-text-1 text-4xl font-semibold mt-24 md:mt-48'>Join the race for autonomy</h1>
        <h2 class='text-text-1 text-xl mt-8'>The easiest way to get into autonomous vehicles.</h2>
        <ul class='text-text-1 text-xl mt-4 list-disc list-inside text-left'>
          <li>Cheap</li>
          <li>Easy to build</li>
          <li>Easy to program</li>
        </ul>
        <button class='text-text-1 text-xl mt-8 mb-8 md:mb-36 btn pl-6 pr-5 py-2 rounded-md flex align-middle'>
          <span class='mr-4'>View instructions</span>
          <img src="svg/arrow1_icon.svg" alt="Arrow point right" class='w-6 my-auto'>
        </button>
      </div>
      <div class='h-full flex justify-end align-middle my-8'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/6zsIHtKtSjE" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen class='rounded-lg my-auto'>
        </iframe>
      </div>
    </div>
  </div>

  <div class='bg-base-1 w-full'>
    <div class='w-main mx-auto flex flex-col align-middle'>
      <h2 class='text-neutral-1 mx-auto mt-24 mb-24 text-4xl'>See it in action</h2>
      <div class='flex flex-col md:flex-row md:justify-between mb-24 space-y-4 md:space-y-0'>
        <div class='md:w-80 h-52 rounded-md'>
          <img src="/img/Mk.1 Render 1.png" alt="Mk.1 Render">
        </div>
        <div class='md:w-80 h-52 rounded-md'>
          <img src="/img/Mk.1 Render 2.png" alt="Mk.1 Render" class='rounded-md'>
        </div>
        <div class='md:w-80 h-52 rounded-md'>
          <img src="/img/Mk.1 Render 3.png" alt="Mk.1 Render" class='rounded-md'>
        </div>
      </div>
    </div>
  </div>

  <div class='relative h-full w-full'>
    <div class='absolute h-[46rem] w-full bg-neutral-1 -z-20'></div>
  </div>
  <div class='relative h-full w-full'>
    <div class='md:bg-[url("/img/SectionBG1.webp")] md:bg-cover w-full h-[40rem] absolute -z-10'
      style:transform="translateY({scroll * 0.15 - 180}px)"/>
  </div>
  <div class='w-full'>
    <div class='w-main mx-auto flex flex-col align-middle'>
      <h2 class='text-base-1 mx-auto mt-24 mb-24 text-4xl'>The process</h2>
      <div class='flex flex-col md:flex-row md:justify-between mb-24 space-y-4 md:space-y-0'>
        <div class='flex-1 md:border-r-[1px] md:border-gray-400 h-96 flex flex-col justify-between'>
          <div class='flex flex-col align-middle'>
            <img src="svg/dollar_icon.svg" alt="Dollar sign" class='h-8 mx-auto mb-6 opacity-50'>
            <span class='text-2xl mx-auto text-text-1 mb-20'>Purchase</span>
            <span class='text-md mx-auto text-text-1 mb-8 text-center px-4'>
              Everything you need for just $100.
            </span>
          </div>
          <div class='bg-base-1 md:w-[17rem] h-32 rounded-md mx-auto'></div>
        </div>
        <div class='flex-1 h-96 flex flex-col align-middle justify-between'>
          <div class='flex flex-col align-middle'>
            <img src="svg/settings_icon.svg" alt="Gear icon" class='h-8 mx-auto mb-6 opacity-50'>
            <span class='text-2xl mx-auto text-text-1 mb-20'>Build</span>
            <span class='text-md mx-auto text-text-1 mb-8 text-center px-4'>
              As easy to put together as Legos. Or just purchase it prebuilt.
            </span>
          </div>
          <div class='bg-base-1 md:w-[17rem] h-32 rounded-md mx-auto'></div>
        </div>
        <div class='flex-1 md:border-l-[1px] md:border-gray-400 h-96 flex flex-col align-middle justify-between'>
          <div class='flex flex-col align-middle'>
            <img src="svg/code_icon.svg" alt="Code icon" class='h-6 mx-auto mb-8 opacity-50'>
            <span class='text-2xl mx-auto text-text-1 mb-20'>Code</span>
            <span class='text-md mx-auto text-text-1 mb-8 text-center px-4'>
              Easily integrate your own custom solutions.
            </span>
          </div>
          <div class='bg-base-1 md:w-[17rem] h-32 rounded-md mx-auto overflow-clip'>
            <img src="/img/Coding image.png" alt="Coding screenshot">
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

<Footer />