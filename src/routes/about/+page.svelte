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
          <img src="/img/Ivan Picture.webp" alt="Profile icon" class='h-16 mr-4 border border-base-1 rounded-full'>
          <div class='flex flex-col h-16 justify-center font-medium text-lg'>
            <span class='text-text-1'>Ivan Ferrier</span>
            <span class='text-accent-1-darker'>Hardware Engineer</span>
          </div>
        </div>
        <div class='flex mb-12'>
          <img src="/img/Mark Picture.webp" alt="Profile icon" class='h-16 mr-4 border border-base-1 rounded-full'>
          <div class='flex flex-col h-16 justify-center font-medium text-lg'>
            <span class='text-text-1'>Mark Muranov</span>
            <span class='text-accent-1-darker'>Software Engineer</span>
          </div>
        </div>
        <div class='flex mb-12'>
          <img src="/img/Jason Picture.webp" alt="Profile icon" class='h-16 mr-4 border border-base-1 rounded-full'>
          <div class='flex flex-col h-16 justify-center font-medium text-lg'>
            <span class='text-text-1'>Jason Smyslov</span>
            <span class='text-accent-1-darker'>Circuits Engineer</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class='bg-base-1'>
    <div class='w-main mx-auto text-neutral-1 flex flex-col'>
      <h2 class='mx-auto mt-32 mb-16 text-4xl'>Our Mission</h2>
      <span class='text-xl mx-auto text-center'>The world of artificial intelligence is a new and evolving field,
        and it is our goal to provide as many people as possible the opportunity to join in!</span>

      <h2 class='mt-48 mb-12 text-4xl'>Additional Resources</h2>
      <ul class='mb-40 text-xl list-disc list-inside pl-8'>
        <li class='mb-2'>Our final presentation:
          <a href="https://docs.google.com/presentation/d/1c7fKIfO0a3xqAOJVhd2jE7-PBzU7wtuqvmUYQ9Ypvp8"
            class="underline text-neutral-1-darker hover:text-neutral-1 transition-colors">Google Slides Link</a>
        </li>
        <li class='mb-2'>Our workshop:
          <a href="https://docs.google.com/document/d/1NpVfJp5u9GvosAA8yT106CMBwHqurKvBY7Kj8kUHKbc"
            class="underline text-neutral-1-darker hover:text-neutral-1 transition-colors">Google Docs Link</a>
        </li>
        <li class='mb-2'>Guide for setting up ESP32-cam:
          <ul class='list-disc list-inside pl-8'>
            <li>
              <a href="https://randomnerdtutorials.com/installing-the-esp32-board-in-arduino-ide-windows-instructions/"
                class="underline text-neutral-1-darker hover:text-neutral-1 transition-colors">Connecting ESP32 to Arduino IDE</a>
            </li>
            <li>
              <a href="https://randomnerdtutorials.com/esp32-cam-video-streaming-face-recognition-arduino-ide/"
                class="underline text-neutral-1-darker hover:text-neutral-1 transition-colors">Streaming ESP32-cam video over Wifi</a>
            </li>
          </ul>
        </li>
        <li class='mb-2'>Receive camera feed in Python:
          <a href="https://stackoverflow.com/questions/69245282/opencv-python-ip-camera-live-image"
            class="underline text-neutral-1-darker hover:text-neutral-1 transition-colors">Link</a>
        </li>
        <li>Receive UDP signals on the ESP32:
          <a href="https://gist.github.com/santolucito/4016405f54850f7a216e9e453fe81803"
            class="underline text-neutral-1-darker hover:text-neutral-1 transition-colors">Link</a>
        </li>
      </ul>
    </div>
  </div>
</main>

<Footer />