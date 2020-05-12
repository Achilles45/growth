<template>
  <div class="testimonial">
     <div class="container">
	<div class="row">
		<div class="col-md-8 col-center m-auto">
			<h2>Testimonials</h2>
			<div id="myCarousel" class="carousel slide" data-ride="carousel">
				<!-- Carousel indicators -->
				<ol class="carousel-indicators">
					<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
					<li data-target="#myCarousel" data-slide-to="1"></li>
					<li data-target="#myCarousel" data-slide-to="2"></li>
					<li data-target="#myCarousel" data-slide-to="3"></li>
					<li data-target="#myCarousel" data-slide-to="4"></li>
				</ol>   
				<!-- Wrapper for carousel items -->
				<div class="carousel-inner">
					<div class="item carousel-item active">
						<div class="img-box"><img src="../assets/images/avatar.png" alt=""></div>
						<p class="testimonial">Thank you Growth Investment. it's fast and paying platform. Don't miss out!</p>
						<p class="overview"><b> Chiedozie Udemmadu</b>, Regular Investor</p>
					</div>
					<div class="item carousel-item">
						<div class="img-box"><img src="../assets/images/avatar.png" alt=""></div>
						<p class="testimonial">Wow.....! Firstly i thought it's all scam but today i now believe. I invested N10k on 21th March 2020 and i received N15k today N24th March 2020. Am so happy. LONG LIVE GROWTH</p>
						<p class="overview"><b>Okoye Ifenna Okwuchukwu</b>, Regular Investor</p>
					</div>
					<div class="item carousel-item">
						<div class="img-box"><img src="../assets/images/avatar.png" alt=""></div>
						<p class="testimonial">Growth Investment has done it again. Instant alert with peace of mind. Invest today and earn. Growth all the way!</p>
						<p class="overview"><b> Chukwuebuka Joshua Okparanze</b>, Regular Investor</p>
					</div>
                    <div class="item carousel-item">
						<div class="img-box"><img src="../assets/images/avatar.png" alt=""></div>
						<p class="testimonial">Thank you growth.. You guys are real and working. Growth for life</p>
						<p class="overview"><b> Ozukwe,patricia Enejeta</b>, Regular Investor</p>
					</div>
                    <div class="item carousel-item">
						<div class="img-box"><img src="../assets/images/avatar.png" alt=""></div>
						<p class="testimonial">It's absolutely lovely that I have been matched and paid today after my recommitment yesterday. Weldone Wazobia Investment.</p>
						<p class="overview"><b> Okoye John</b>, Regular Investor</p>
					</div>
                     <div class="item carousel-item">
						<div class="img-box"><img src="../assets/images/avatar.png" alt=""></div>
						<p class="testimonial">That feeling when you are sure of cashing out on weekly basis.</p>
						<p class="overview"><b> Divine Chidera</b>, Regular Investor</p>
					</div>
				</div>
				<!-- Carousel controls -->
				<a class="carousel-control left carousel-control-prev" href="#myCarousel" data-slide="prev">
					<i class="fa fa-angle-left"></i>
				</a>
				<a class="carousel-control right carousel-control-next" href="#myCarousel" data-slide="next">
					<i class="fa fa-angle-right"></i>
				</a>
			</div>
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
.testimonial{
    padding: 4rem 0;
    h2 {
	color: #333;
	text-align: center;
	text-transform: uppercase;
	font-family: "Roboto", sans-serif;
	font-weight: bold;
	position: relative;
	margin: 30px 0 60px;
}
h2::after {
	content: "";
	width: 100px;
	position: absolute;
	margin: 0 auto;
	height: 3px;
	background: #8fbc54;
	left: 0;
	right: 0;
	bottom: -10px;
}
.col-center {
	margin: 0 auto;
	float: none !important;
}
.carousel {
	margin: 50px auto;
	padding: 0 70px;
}
.carousel .item {
	color: #999;
	font-size: 14px;
    text-align: center;
	overflow: hidden;
    min-height: 290px;
}
.carousel .item .img-box {
	width: 135px;
	height: 135px;
	margin: 0 auto;
	padding: 5px;
	border: 1px solid #ddd;
	border-radius: 50%;
}
.carousel .img-box img {
	width: 100%;
	height: 100%;
	display: block;
	border-radius: 50%;
}
.carousel .testimonial {
	padding: 30px 0 10px;
}
.carousel .overview {	
	font-style: italic;
}
.carousel .overview b {
	text-transform: uppercase;
	color: #7AA641;
}
.carousel .carousel-control {
	width: 40px;
    height: 40px;
    margin-top: -20px;
    top: 50%;
	background: none;
}
.carousel-control i {
    font-size: 28px;
	line-height: 42px;
    position: absolute;
    display: inline-block;
	color: rgba(0, 0, 0, 0.8);
    // text-shadow: 0 3px 3px #e6e6e6, 0 0 0 #000;
}
.carousel .carousel-indicators {
	bottom: -40px;
}
.carousel-indicators li, .carousel-indicators li.active {
	width: 10px;
	height: 10px;
	margin: 1px 3px;
	border-radius: 100%;
}
.carousel-indicators li {	
	background: #999;
	border-color: transparent;
	// box-shadow: inset 0 2px 1px rgba(0,0,0,0.2);
}
.carousel-indicators li.active {	
	background: #ccc;		
	// box-shadow: inset 0 2px 1px rgba(0,0,0,0.2);
}
}
</style>