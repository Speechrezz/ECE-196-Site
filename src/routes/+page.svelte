<script>
  import Navbar from "../lib/comp/Navbar.svelte";
	import Footer from "../lib/comp/Footer.svelte";
</script>

<Navbar />

<div class='flex flex-col bg-neutral-1'>
  <div class='bg-[url("/img/HeroBG.png")] bg-cover w-full flex justify-center'>
    <div class='w-main flex justify-between'>
      <div class='w-96'>
        <h1 class='text-text-1 text-4xl font-semibold mt-48'>Join the race for autonomy</h1>
        <h2 class='text-text-1 text-xl mt-8'>The easiest way to get into autonomous vehicles.</h2>
        <ul class='text-text-1 text-xl mt-4 list-disc list-inside'>
          <li>Cheap</li>
          <li>Easy to build</li>
          <li>Easy to program</li>
        </ul>
        <button class='text-text-1 text-xl mt-8 mb-36 bg-accent-1 pl-6 pr-16 py-2 rounded-md'>View instructions</button>
      </div>
      <div class='h-full flex justify-end align-middle'>
        <div class='bg-accent-1 h-64 w-96 my-auto rounded-md'>
        </div>
      </div>
    </div>
  </div>

  <div class='bg-base-1 w-full'>
    <div class='w-main mx-auto flex flex-col align-middle'>
      <h2 class='text-neutral-1 mx-auto mt-24 mb-24 text-4xl'>See it in action</h2>
      <div class='flex justify-between mb-24'>
        <div class='bg-neutral-1 w-80 h-52 rounded-md'></div>
        <div class='bg-neutral-1 w-80 h-52 rounded-md'></div>
        <div class='bg-neutral-1 w-80 h-52 rounded-md'></div>
      </div>
    </div>
  </div>

  <div class='bg-neutral-1 w-full'>
    <div class='w-main mx-auto flex flex-col align-middle'>
      <h2 class='text-base-1 mx-auto mt-24 mb-24 text-4xl'>The process</h2>
      <div class='flex justify-between mb-24'>
        <div class='bg-base-1 w-80 h-52 rounded-md'></div>
        <div class='bg-base-1 w-80 h-52 rounded-md'></div>
        <div class='bg-base-1 w-80 h-52 rounded-md'></div>
      </div>
    </div>
  </div>
</div>

<Footer />