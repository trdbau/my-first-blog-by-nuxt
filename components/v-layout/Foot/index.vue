<template>
  <!-- s-footer
    ================================================== -->
  <footer class="s-footer">

    <div class="s-footer__main">
      <div class="row">

        <div class="col-two md-full mob-full s-footer__social">

          <h4>Social</h4>

          <ul class="s-footer__linklist">
            <li><a href="#0">Facebook</a></li>
            <li><a href="#0">Instagram</a></li>
          </ul>

        </div> <!-- end s-footer__social -->

        <div class="col-ten md-full end s-footer__subscribe">

          <h4>Register Newsletter</h4>

          <p>Too lazy to visit Bauer every day? No problem, Bauer will send you articles every week.</p>

          <div class="subscribe-form">
            <form id="mc-form" class="group" novalidate="true">

              <input type="email" value="" name="EMAIL" class="email" id="mc-email" placeholder="Email Address"
                required="">

              <input type="submit" name="subscribe" value="Send">

              <label for="mc-email" class="subscribe-message"></label>

            </form>
          </div>

        </div> <!-- end s-footer__subscribe -->

      </div>
    </div> <!-- end s-footer__main -->

    <div class="s-footer__bottom">
      <div class="row">
        <div class="col-full">
          <div class="s-footer__copyright">
            <span>© Copyright Bauer 2018</span>
            <span>Site Template by <a href="https://colorlib.com/">Colorlib</a></span>
          </div>

          <div class="go-top">
            <a class="smoothscroll" title="Back to Top" href="#top"></a>
          </div>
        </div>
      </div>
    </div> <!-- end s-footer__bottom -->

  </footer> <!-- end s-footer -->
</template>

<style>
</style>

<script>
export default {
  name: 'BaseFooter',
}
</script>
