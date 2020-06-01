<template>
  <div class="carousel__wrapper">
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="carousel-overlay"></div>
          <img class="carousel-img" src="../assets/images/hero2.jpeg" alt="First slide" />
          <div class="carousel-caption">
            <h1 class="animated bounceIn">EARN 50% PROFIT ON YOUR INVESTMENT IN 3 DAYS</h1>
            <p>Make registration with Growth Investment and enjoy 50% profit in 3 working days</p>
            <router-link to="/signup" class="carousel-btn animated zoomIn animate3d">START NOW</router-link>
          </div>
        </div>
        <div class="carousel-item">
          <div class="carousel-overlay"></div>
          <img class="carousel-img" src="../assets/images/hero4.jpeg" alt="Second slide" />
          <div class="carousel-caption">
            <h1 class="animated slideInDown animate3d">YOUR INVESTMENT IS SAFE & SECURED</h1>
            <p
              class="animated slideInRight animate3d"
            >Initial investment is compulsory. 100% of what ever you donated in the system</p>
            <router-link to="/signup" class="carousel-btn animated zoomIn animate3d">START NOW</router-link>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon d-none d-md-block" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon d-none d-md-block" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "Carousel"
};
</script>
<style lang="scss" scoped>
@import '../assets/styles/_colors';
.carousel__wrapper {
  .carousel-inner {
    position: relative;
  }
  .carousel-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(4,9,30,.92);
  }
  .carousel-img {
    width: auto;
    height: 90vh;
    display: block !important;
    width: 100vw;
  }
  .animate3d {
    animation-duration: 5s;
  }
  .carousel-caption {
    position: absolute;
    top: 30%;
    transform: translateX(-50%, -50%);
    width: 65%;
    text-align: center;
    color:#fff;
    h1 {
      font-weight: 700;
      font-size: 2.5rem;
      padding-bottom: 1rem;
      letter-spacing: 0.4px;
      text-transform: uppercase;
      text-shadow: 0.02em 0.02em 0.03em #fff;
      line-height: 1.3;
    }
    .text-color{
      color: $primary-color;
      text-shadow: 0.02em 0.02em 0.03em $primary-color;
    }
    p {
      letter-spacing: 1px;
      font-size: 1rem;
      padding-bottom: 2rem;
      // opacity: 0.5;
    }
    .fa-long-arrow-alt-right{
      margin-left: 0rem;
      animation-name: animate;
      animation-duration: 3s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }
    .carousel-btn {
      color: #fff;
      background: $primary-color;
      padding: 1rem 4rem;
      text-align: center;
      font-size: 1rem;
      font-weight: bold;
      text-decoration: none;
      border-radius: 3px;
      border: 1px solid $primary-color;
      text-transform: uppercase;
    }
  }
  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    height: 50px;
    width: 50px;
    background-color: rgba(0, 0, 0, 0.3) !important;
    background-size: 40%, 40%;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.7);
  }
}

@media only screen and (max-width: 600px){
  .carousel-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(4,9,30,.85) !important;
  }
    .carousel-caption{
      position: absolute;
      top: 5%;
      transform: translateX(-50%, -50%);
      width: 70% !important;
      text-align: center !important;
      h1{
        text-align: center !important;
        font-weight: 700;
        font-size: 1rem !important;
        padding-bottom: 1rem;
        letter-spacing: 0.4px;
        text-transform: uppercase;
        text-shadow: 0.02em 0.02em 0.03em #fff;
        line-height: 1.3;
      }
      p{
        font-size: .8rem !important;
      }
    }
     .carousel-img {
    width: auto;
    height: 60vh !important;
    display: block !important;
    width: 100vw;
  }
}
//Animation for button arrow
@keyframes animate {
    from{
        opacity: 0;
    }
    to{
        transform: translateX(30px);
        opacity: 1;
    }
}
</style>