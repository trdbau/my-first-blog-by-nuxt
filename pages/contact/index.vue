<template>
  <!-- s-content
    ================================================== -->
  <section class="s-content s-content--narrow">
    <div class="row">
      <div class="s-content__header col-full">
        <h1 class="s-content__header-title">
          Feel Free To Contact Us.
        </h1>
      </div> <!-- end s-content__header -->

      <div class="col-full s-content__main">
        <p class="lead">
          Lorem ipsum Deserunt est dolore Ut Excepteur nulla occaecat magna occaecat Excepteur nisi esse veniam dolor consectetur minim qui nisi esse deserunt commodo ea enim ullamco non voluptate consectetur minim aliquip Ut incididunt amet ut cupidatat.
        </p>

        <p>
          Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in tempor veniam consequat non laborum adipisicing aliqua ea nisi sint ut quis proident ullamco ut dolore culpa occaecat ut laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.
        </p>

        <div class="row">
          <div class="col-six tab-full">
            <h3>Where to Find Us</h3>

            <p>
              K01/H108/03/38<br>
              Phạm Như Xương, Đà Nẵng<br>
              550000 ĐN
            </p>
          </div>

          <div class="col-six tab-full">
            <h3>Contact Info</h3>

            <p>
              trdbau@gmail.com<br>
              info@Bauerwebsite.com <br>
              Phone: (+84) 38 389 5522
            </p>
          </div>
        </div> <!-- end row -->

        <h3>Say Hello.</h3>

        <form
          id="cForm"
          name="cForm"
          method="post"
          action=""
        >
          <fieldset>
            <div class="form-field">
              <input
                id="cName"
                name="cName"
                type="text"
                class="full-width"
                placeholder="Your Name"
                value=""
              >
            </div>

            <div class="form-field">
              <input
                id="cEmail"
                name="cEmail"
                type="text"
                class="full-width"
                placeholder="Your Email"
                value=""
              >
            </div>

            <div class="form-field">
              <input
                id="cWebsite"
                name="cWebsite"
                type="text"
                class="full-width"
                placeholder="Website"
                value=""
              >
            </div>

            <div class="message form-field">
              <textarea
                id="cMessage"
                name="cMessage"
                class="full-width"
                placeholder="Your Message"
              />
            </div>

            <button
              type="submit"
              class="submit btn btn--primary full-width"
            >
              Submit
            </button>
          </fieldset>
        </form> <!-- end form -->
      </div> <!-- end s-content__main -->
    </div> <!-- end row -->
  </section> <!-- s-content -->
</template>

<script>
export default {
  name: 'Contact',
};
</script>
