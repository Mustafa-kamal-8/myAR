<script>
  export let url = "https://yourwebsite.com";
  export let quote = "Check this out!";

  const handleShare = () => {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}&quote=${encodeURIComponent(quote)}`;
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };
</script>

<button class="action-btn facebook-btn" on:click={handleShare}>
  <span class="btn-icon" style="background: rgba(24, 119, 242, 0.8); border-color: rgba(24, 119, 242, 1);">
    <img src="/Share.svg" alt="Facebook" style="width: 20px; height: 20px; filter: brightness(0) invert(1);">
  </span>
  <span class="btn-text">Facebook</span>
</button>