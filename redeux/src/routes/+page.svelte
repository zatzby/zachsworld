<script lang="ts">
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<body>
    <div>
        <Header />
        <h1>Working on Custom Cabinets and Nostr stuff.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim. In hac habitasse platea dictumst. Morbi non urna in ligula sodales ullamcorper. Integer laoreet, nisl nec vulputate sollicitudin, purus diam volutpat risus, id facilisis quam orci in nulla. Praesent non tincidunt libero, a gravida neque.</p>

<p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer quis auctor elit, et venenatis odio. Mauris fringilla, massa eget dignissim ullamcorper, elit libero aliquet orci, ut sodales nisi lectus ac ante. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum eget felis nec purus commodo convallis.</p>

<p>Aliquam erat volutpat. Etiam fermentum consectetur nulla, nec fringilla est aliquet eget. Nulla facilisi. Sed vitae justo condimentum, porttitor sapien ac, molestie mauris. Cras eget condimentum nulla, nec aliquam ante. Sed in enim faucibus, aliquet lorem eu, consequat justo. Donec ut diam vitae lorem tincidunt elementum.</p>

    </div>
    <div class="footer-wrapper">
        <Footer />
    </div>
</body>

<style>
    h1 {
        text-align: center;
        font-size: 1.5rem;
    }

    p {
        text-align: center;
        font-size: 1rem;
        padding-top: 30px;
    }

    .footer-wrapper {
        padding-top:60px;
        text-align: center;
    }
</style>