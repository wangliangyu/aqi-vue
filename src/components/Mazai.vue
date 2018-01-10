<template>
  <div id='app' data-spy="scroll" data-target=".navbar-collapse" data-offset="50">

    <!-- PRE LOADER -->
    <div class="preloader">
      <div class="spinner">
        <span class="spinner-rotate"></span>
      </div>
    </div>

    <!-- NAVIGATION SECTION -->
    <div class="navbar custom-navbar navbar-fixed-top" role="navigation">
      <div class="container">

        <div class="navbar-header">
          <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="icon icon-bar"></span>
            <span class="icon icon-bar"></span>
            <span class="icon icon-bar"></span>
          </button>

          <div class="navbar-brand">
            <span class="iconfont icon-mashengxiao" style="font-size: 40px;color: darkorange;"></span>
          </div>
        </div>

        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
            <li><a class="smoothScroll" href="#home">Home</a></li>
            <li><a class="smoothScroll" href="#about">About mazai</a></li>
            <li><a class="smoothScroll" href="#work">My Works</a></li>
          </ul>
        </div>

      </div>
    </div>


    <!-- HOME SECTION -->
    <section id="home">

      <div class="container">
        <div class="row">

          <div class="col-md-offset-1 col-md-2 col-sm-3">
            <img src="../assets/images/profile-image.jpg" class="wow fadeInUp img-responsive img-circle"
                 data-wow-delay="0.2s" alt="about image">
          </div>

          <div class="col-md-8 col-sm-8">
            <h1 class="wow fadeInUp" data-wow-delay="0.6s">马仔和他的圈子。</h1>
            <!--后续这边需要用markdown显示我的简历,使用a链接跳转即可-->
            <a href="#" class="wow fadeInUp btn btn-default section-btn" data-wow-delay="1s">我的简历</a>
          </div>

        </div>
      </div>
    </section>

    <!-- ABOUT SECTION -->
    <section id="about">
      <div class="container">
        <div class="row">

          <div class="col-md-8 col-sm-12">
            <div class="about-thumb">
              <div class="wow fadeInUp section-title" data-wow-delay="0.6s">
                <h2>一些关于我的事</h2>
                <p><strong>码农里的水手</strong></p>
              </div>
              <div class="wow fadeInUp" data-wow-delay="0.8s">
                <p>会有一些奇怪的想法，大部分纯属臆想，剩下的99%是臆想。</p>
                <p>会吐槽，会抱怨，会不爽。</p>
                <p>爱生活，爱家人，爱前端。</p>
              </div>
              <ul class="social-icon">
                <li class="wow fadeInLeft" data-wow-delay="1s"><a href="#" class="fa fa-twitter"></a></li>
                <li class="wow fadeInUp" data-wow-delay="1.2s"><a href="#" class="fa fa-linkedin"></a></li>
                <li class="wow fadeInRight" data-wow-delay="1.4s"><a href="#" class="fa fa-dribbble"></a></li>
              </ul>
            </div>
          </div>

          <div class="col-md-4 col-sm-12">
            <div class="wow fadeInUp" data-wow-delay="0.4s">
              <h2>On Instagram</h2>
            </div>

            <div class="wow fadeInUp" data-wow-delay="0.6s">
              <a href="#">
                <img src="../assets/images/instagram-image1.jpg" class="img-responsive" alt="instagram image">
              </a>

              <a href="#">
              <img src="../assets/images/instagram-image2.jpg" class="img-responsive" alt="instagram image">
              </a>

              <a href="#">
              <img src="../assets/images/instagram-image3.jpg" class="img-responsive" alt="instagram image">
              </a>

              <a href="#">
              <img src="../assets/images/instagram-image4.jpg" class="img-responsive" alt="instagram image">
              </a>

              <a href="#">
              <img src="../assets/images/instagram-image5.jpg" class="img-responsive" alt="instagram image">
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>


    <!-- SKILL SECTION -->
    <section id="skill">
      <div class="container">
        <div class="row">

          <div class="col-md-4 col-sm-6">
            <div class="wow fadeInUp section-title" data-wow-delay="0.2s">
              <h2>术业</h2>
              <p>拿过奖也挨过批</p>
              <p>迎难而上做不到</p>
              <p>半途而废干不来</p>
            </div>
          </div>

          <div class="col-md-offset-1 col-md-6 col-sm-6">
            <div class="skill-thumb">

              <div class="wow fadeInUp" data-wow-delay="1s">
                <strong>环境遥感</strong>
                <span class="pull-right">75%</span>
                <div class="progress">
                  <div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="95" aria-valuemin="0"
                       aria-valuemax="100" style="width: 75%;"></div>
                </div>
              </div>

              <div class="wow fadeInUp" data-wow-delay="1.2s">
                <strong>前端开发</strong>
                <span class="pull-right">55%</span>
                <div class="progress">
                  <div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="80" aria-valuemin="0"
                       aria-valuemax="100" style="width: 55%;"></div>
                </div>
              </div>

              <div class="wow fadeInUp" data-wow-delay="1.4s">
                <strong>大数据</strong>
                <span class="pull-right">5%</span>
                <div class="progress">
                  <div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="65" aria-valuemin="0"
                       aria-valuemax="100" style="width: 5%;"></div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>


    <!-- WORK SECTION -->
    <section id="work">
      <div class="container">
        <div class="row">

          <div class="col-md-12 col-sm-12">
            <div class="wow fadeInUp section-title" data-wow-delay="0.2s">
              <h2>Seleted Works</h2>
              <p>Lorem ipsum dolor sit amet, consectetur venenatis tincidunt.</p>
            </div>
          </div>

          <div class="wow fadeInUp col-md-3 col-sm-6" data-wow-delay="0.4s">
            <!-- WORK THUMB -->
            <div class="work-thumb">
              <a href="../assets/images/work-1.jpg" class="image-popup">
                <img src="../assets/images/work-1.jpg" class="img-responsive" alt="Work">
              </a>
            </div>
            <h4>Graphic & Branding</h4>
          </div>

          <div class="wow fadeInUp col-md-3 col-sm-6" data-wow-delay="0.6s">
            <!-- WORK THUMB -->
            <div class="work-thumb">
              <a href="../assets/images/work-2.jpg" class="image-popup">
                <img src="../assets/images/work-2.jpg" class="img-responsive" alt="Work">
              </a>
            </div>
            <h4>Logo Design</h4>
          </div>

          <div class="wow fadeInUp col-md-3 col-sm-6" data-wow-delay="0.8s">
            <!-- WORK THUMB -->
            <div class="work-thumb">
              <a href="../assets/images/work-3.jpg" class="image-popup">
                <img src="../assets/images/work-3.jpg" class="img-responsive" alt="Work">
              </a>
            </div>
            <h4>Photography</h4>
          </div>

          <div class="wow fadeInUp col-md-3 col-sm-6" data-wow-delay="0.8s">
            <!-- WORK THUMB -->
            <div class="work-thumb">
              <a href="../assets/images/work-4.jpg" class="image-popup">
                <img src="../assets/images/work-4.jpg" class="img-responsive" alt="Work">
              </a>
            </div>
            <h4>Minimal Themes</h4>
          </div>

        </div>
      </div>
    </section>
    <p class="footer-copyright">苏ICP备 17070071号</p>
  </div>
</template>

<script>
  export default {
    name: 'mazai',
    data() {
      return{
      }
    }
  }
</script>

<style>
  @import "../assets/css/pic/pic.css";
</style>
