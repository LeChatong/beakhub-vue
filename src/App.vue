<template>

  <div id="app">
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>-->
    <div class="wrapper ">
      <Sidebar/>
      <div class="main-panel">
        <!-- Navbar -->
        <Navbar/>
        <!-- End Navbar -->
        <div class="content">
          <router-view/>
        </div>
        <footer class="footer">
          <div class="container-fluid">
            <nav class="float-left">
              <ul>
                <li>
                  <a href="https://www.creative-tim.com">
                    Creative Tim
                  </a>
                </li>
                <li>
                  <a href="https://creative-tim.com/presentation">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="http://blog.creative-tim.com">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="https://www.creative-tim.com/license">
                    Licenses
                  </a>
                </li>
              </ul>
            </nav>
            <div class="copyright float-right">
              &copy;
              <!--<script>
                document.write(new Date().getFullYear())
              </script>-->{{ year }}, made with <i class="material-icons">favorite</i> by
              <a href="https://www.creative-tim.com" target="_blank">Creative Tim</a> for a better web.
            </div>
          </div>
        </footer>
      </div>
    </div>
    <div class="fixed-plugin">
      <div class="dropdown show-dropdown">
        <a href="#" data-toggle="dropdown">
          <i class="fa fa-cog fa-2x"> </i>
        </a>
        <ul class="dropdown-menu">
          <li class="header-title"> Sidebar Filters</li>
          <li class="adjustments-line">
            <a href="javascript:void(0)" class="switch-trigger active-color">
              <div class="badge-colors ml-auto mr-auto">
                <span class="badge filter badge-purple" data-color="purple"></span>
                <span class="badge filter badge-azure" data-color="azure"></span>
                <span class="badge filter badge-green" data-color="green"></span>
                <span class="badge filter badge-warning" data-color="orange"></span>
                <span class="badge filter badge-danger" data-color="danger"></span>
                <span class="badge filter badge-rose active" data-color="rose"></span>
              </div>
              <div class="clearfix"></div>
            </a>
          </li>
          <li class="header-title">Images</li>
          <li class="active">
            <a class="img-holder switch-trigger" href="javascript:void(0)">
              <img src="../public/static/img/sidebar-1.jpg" alt="">
            </a>
          </li>
          <li>
            <a class="img-holder switch-trigger" href="javascript:void(0)">
              <img src="../public/static/img/sidebar-2.jpg" alt="">
            </a>
          </li>
          <li>
            <a class="img-holder switch-trigger" href="javascript:void(0)">
              <img src="../public/static/img/sidebar-3.jpg" alt="">
            </a>
          </li>
          <li>
            <a class="img-holder switch-trigger" href="javascript:void(0)">
              <img src="../public/static/img/sidebar-4.jpg" alt="">
            </a>
          </li>
          <li class="button-container">
            <a href="https://www.creative-tim.com/product/material-dashboard" target="_blank" class="btn btn-primary btn-block">Free Download</a>
          </li>
          <!-- <li class="header-title">Want more components?</li>
              <li class="button-container">
                  <a href="https://www.creative-tim.com/product/material-dashboard-pro" target="_blank" class="btn btn-warning btn-block">
                    Get the pro version
                  </a>
              </li> -->
          <li class="button-container">
            <a href="https://demos.creative-tim.com/material-dashboard/docs/2.1/getting-started/introduction.html" target="_blank" class="btn btn-default btn-block">
              View Documentation
            </a>
          </li>
          <li class="button-container github-star">
            <a class="github-button" href="https://github.com/creativetimofficial/material-dashboard" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star ntkme/github-buttons on GitHub">Star</a>
          </li>
          <li class="header-title">Thank you for 95 shares!</li>
          <li class="button-container text-center">
            <button id="twitter" class="btn btn-round btn-twitter"><i class="fa fa-twitter"></i> &middot; 45</button>
            <button id="facebook" class="btn btn-round btn-facebook"><i class="fa fa-facebook-f"></i> &middot; 50</button>
            <br>
            <br>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import Sidebar from '@/components/Sidebar'
  import Navbar from '@/components/Navbar'
  export default {
    components: {
      Sidebar,
      Navbar
    },
    data(){
      return{
        year: new Date().getFullYear()
      }
    },
    mounted() {
      /*
      chartist.setAttribute('src', './assets/js/plugins/')
      let notify = document.createElement('script')
      notify.setAttribute('src', './assets/js/plugins/')


      document.head.appendChild(moment)
      document.head.appendChild(sweetalert2)
      document.head.appendChild(validate)
      document.head.appendChild(wizard)
      document.head.appendChild(selectpicker)
      document.head.appendChild(datetimepicker)
      document.head.appendChild(dataTables)
      document.head.appendChild(tagsinput)
      document.head.appendChild(jasny)
      document.head.appendChild(fullcalendar)
      document.head.appendChild(jvectormap)
      document.head.appendChild(nouislider)
      document.head.appendChild(core)
      document.head.appendChild(arrive)
      document.head.appendChild(map)
      document.head.appendChild(chartist)
      document.head.appendChild(notify)*/
    }
  }

</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons');
  @import url('https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css');
  @import url('assets/css/material-dashboard.min.css');
  @import url('assets/css/material-dashboard.css');
  @import url('assets/css/material-dashboard-rtl.css');
  @import url('../public/static/demo/demo.css');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
