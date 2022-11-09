<script>
  const base_look = "h-full px-4 flex align-middle navbar-link border-b-2";
  const look = base_look + " border-transparent";
  const hover_look = base_look + " border-accent-1";

  export let index = 0;
</script>

<nav class='bg-neutral-1 w-full h-12 md:h-16 flex justify-center fixed z-50'>
  <div class='flex justify-between w-main h-full my-auto text-text-1 text-xl'>
    <a href="/" class='hidden h-full md:flex align-middle navbar-link'>
      <span class='my-auto'>EZ Autonomy</span>
    </a>
    <div class='flex justify-between mx-auto md:mx-0'>
      <a href="/" class={index === 0 ? hover_look : look}>
        <span class='my-auto'>Home</span>
      </a>
      <a href="/about" class={index === 1 ? hover_look : look}>
        <span class='my-auto'>About</span>
      </a>
    </div>
  </div>
</nav>