<script>
	import Footer from "$lib/comp/Footer.svelte";
  import Navbar from "$lib/comp/Navbar.svelte";

</script>

<Navbar index={1}/>

<main class='bg-neutral-1'>
  <div class='pt-16 h-full w-full'>
    <div class='h-full w-main mx-auto flex justify-between mb-40'>
      <div class='mt-40 flex flex-col'>
        <span class='text-text-1 text-4xl font-semibold'>Meet our team</span>
        <span class='text-text-1 text-lg mt-6 w-64'>
          Learn more about the crafty people responsible for this project.
        </span>
      </div>
      <div class='h-96 mt-40 flex flex-col'>
        <div class='flex mb-12'>
          <img src="svg/profile_icon.svg" alt="Profile icon" class='h-16 mr-4'>
          <div class='flex flex-col h-16 justify-center font-medium text-lg'>
            <span class='text-text-1'>Ivan Ferrier</span>
            <span class='text-accent-1-darker'>Hardware Engineer</span>
          </div>
        </div>
        <div class='flex mb-12'>
          <img src="svg/profile_icon.svg" alt="Profile icon" class='h-16 mr-4'>
          <div class='flex flex-col h-16 justify-center font-medium text-lg'>
            <span class='text-text-1'>Jason Smyslov</span>
            <span class='text-accent-1-darker'>Circuits Engineer</span>
          </div>
        </div>
        <div class='flex mb-12'>
          <img src="svg/profile_icon.svg" alt="Profile icon" class='h-16 mr-4'>
          <div class='flex flex-col h-16 justify-center font-medium text-lg'>
            <span class='text-text-1'>Mark Muranov</span>
            <span class='text-accent-1-darker'>Software Engineer</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class='bg-base-1'>
    <div class='w-main mx-auto text-neutral-1 flex flex-col'>
      <span class='mx-auto mt-32 mb-16 text-4xl'>Our Mission</span>
      <span class='text-xl mx-auto mb-72'>Stuff that we do and want to do and other stuff etc.</span>
    </div>
  </div>
</main>

<Footer />