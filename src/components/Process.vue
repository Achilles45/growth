<template>
  <div class="process" id="process">
      <div class="container">
          <div class="row">
              <div class="col-md-3"></div>
              <div class="col-md-6 text-center">
                  <h3>HOW WE GENERATE OUR INCOME</h3>
              </div>
               <div class="col-md-3"></div>
          </div>
          <div class="row">
              <div class="col-md-6 pt-4">
                  <img src="../assets/images/banner3.jpeg" class="img-fluid process__img" alt="">
              </div>
              <!-- <div class="col-md-1"></div> -->
              <div class="col-md-5 pt-4">
                  <div class="content d-flex">
                      <div class="icons">
                          <!-- <i class="fa fa-cubes"></i> -->
                      </div>
                      <div class="text">
                          <h4>Crowdfunding</h4>
                          <p>The company deals with various high growth and secured investment opportunities. Some of the products and services we deal on includes</p>
                          <p><i class="fa fa-check-circle"></i>&nbsp;&nbsp; Import of gasoline, diesel, heating oil and aviation fuel</p>
                          <p><i class="fa fa-check-circle"></i>&nbsp;&nbsp; Import of biofuel, lubricants, bitumen and sulphur</p>
                          <p><i class="fa fa-check-circle"></i>&nbsp;&nbsp; Import and Export of general pectroleum products</p>
                          <p><i class="fa fa-check-circle"></i>&nbsp;&nbsp;  Import and Export of Agro Alied Products</p>
                          <p><i class="fa fa-check-circle"></i>&nbsp;&nbsp; Short term real estate investments and others...</p>
                      </div>
                  </div><br>
                  <!-- <div class="content d-flex">
                      <div class="icons">
                          <i class="fa fa-clone"></i>
                      </div>
                      <div class="text">
                          <h4>Maturity & Payout</h4>
                          <p>That's the product we deal on that makes us generate the money to pay investors in three days time and also the promo package for new members in the platform.</p>
                      </div>
                  </div> -->
              </div>
          </div>
          <div class="row">
              <div class="col-12">
                    <p>These are some of the product we deal on that helps the company generate quick returns to pay investors in three days time and also the promo package for new members in the platform. Want to grow your money, give us a try today!</p>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_colors';
.process{
    padding: 7rem 0;
    h3{
        font-weight: bolder;
        color: #2b2b2b;
        padding-bottom: 3rem;
    }
    .process__img{
        border-radius: 5px;
    }
    .content{
        .icons{
            // padding-right: 2rem;
            font-size: 2rem;
            color: $primary-color;
        }
        .text{
            h4{
                font-weight: bold;
                padding-bottom: .5rem;
                color:$primary-color;
            }
            p{
                color: #627081;
                font-size: .95rem;
                // opacity: .8;
                line-height: 1.8;
            }
        }
    }
     p{
        color: #627081;
        font-size: .95rem;
        // opacity: .8;
        line-height: 1.8;
    }
}
</style>