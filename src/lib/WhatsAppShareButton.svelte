<script>
  export let text = "Check this out!";
  export let url = "https://yourwebsite.com";

  const handleShare = () => {
    const message = encodeURIComponent(`${text} ${url}`);
    const whatsappUrl = `https://wa.me/?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };
</script>

<button class="action-btn whatsapp-btn" on:click={handleShare}>
  <span class="btn-icon" style="background: rgba(37, 211, 102, 0.8); border-color: rgba(37, 211, 102, 1);">
    <img src="/Share.svg" alt="WhatsApp" style="width: 20px; height: 20px; filter: brightness(0) invert(1);">
  </span>
  <span class="btn-text">WhatsApp</span>
</button>