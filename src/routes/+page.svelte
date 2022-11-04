<script>
  import Navbar from "../lib/comp/Navbar.svelte";
	import Footer from "../lib/comp/Footer.svelte";

  let scroll;
</script>

<svelte:window bind:scrollY={scroll} />

<Navbar />

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
        <button class='text-text-1 text-xl mt-8 mb-8 md:mb-36 btn pl-6 pr-16 py-2 rounded-md'>View instructions</button>
      </div>
      <div class='h-full flex justify-end align-middle my-8'>
        <div class='bg-accent-1 h-48 md:h-64 w-96 my-auto rounded-md'>
        </div>
      </div>
    </div>
  </div>

  <div class='bg-base-1 w-full'>
    <div class='w-main mx-auto flex flex-col align-middle'>
      <h2 class='text-neutral-1 mx-auto mt-24 mb-24 text-4xl'>See it in action</h2>
      <div class='flex flex-col md:flex-row md:justify-between mb-24 space-y-4 md:space-y-0'>
        <div class='bg-neutral-1 md:w-80 h-52 rounded-md'></div>
        <div class='bg-neutral-1 md:w-80 h-52 rounded-md'></div>
        <div class='bg-neutral-1 md:w-80 h-52 rounded-md'></div>
      </div>
    </div>
  </div>

  <div class='relative h-full w-full'>
    <div class='md:bg-[url("/img/SectionBG1.webp")] md:bg-cover w-full h-[40rem] absolute -z-10'
      style:transform="translateY({scroll * 0.15 - 150}px)"/>
  </div>
  <div class='w-full'>
    <div class='w-main mx-auto flex flex-col align-middle'>
      <h2 class='text-base-1 mx-auto mt-24 mb-24 text-4xl'>The process</h2>
      <div class='flex flex-col md:flex-row md:justify-between mb-24 space-y-4 md:space-y-0'>
        <div class='bg-base-1 md:w-80 h-52 rounded-md'></div>
        <div class='bg-base-1 md:w-80 h-52 rounded-md'></div>
        <div class='bg-base-1 md:w-80 h-52 rounded-md'></div>
      </div>
    </div>
  </div>
</main>

<Footer />