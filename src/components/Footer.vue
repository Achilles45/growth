<template>
  <footer class="footer">
      <div class="main__content">
          <div class="container">
          <div class="row">
              <div class="col-md-4">
                  <h5>Company</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius recusandae, impedit error numquam minima placeat dicta laboriosam consequuntur repellat. Nam!</p>
              </div>
               <div class="col-md-4">
                  <h5>Our Location & Contact</h5>
                <h6>Head Office</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, quasi?</p>
                 <h6>Email Address</h6>
                <p>support@growthinvestment.com</p>
                 <h6>Phone</h6>
                <p>08083946355</p>
              </div>
              <div class="col-md-4">
                  <h5>Payment Method</h5>
                  <p>You can make payment online or through direct bank deposit</p>
                  <h5>We Accept</h5>
                  <img src="../assets/images/payment.png" class="img-fluid" alt="">
              </div>
          </div>
      </div>
      </div>
      <div class="footer__bottom">
          <div class="container">
              <div class="row">
                  <div class="col-12 text-center">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto odit dolorum, cupiditate minus voluptate enim nulla impedit. Quisquam, minima dolorem.</p>
                  </div>
              </div>
          </div>
      </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
footer{
    .main__content{
        background: #0A0A0A;
        padding: 4rem 0;
    }
    color: #fff;
    h5{
        padding-top: 1rem;
        font-weight: bold;
        font-size: 1rem;
        padding-bottom: 1.5rem;
        opacity: .8;
        text-transform: uppercase;
    }
    h6{
        opacity: .95;
    }
    p{
        font-size: .8rem;
        opacity: .7;
        line-height: 1.8;
    }
    .footer__bottom{
        background: #090909;
        color: #fff;
        padding: 1rem 0;
         p{
        font-size: .8rem;
        opacity: .7;
        line-height: 1.8;
    }
    }
}
</style>