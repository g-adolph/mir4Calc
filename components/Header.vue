<template>
  <header>
    <div id="header-top-fixed fixed-top" class="header-fixed-position"></div>
    <div id="sticky-header" class="menu-area sticky-menu">
        <div class="container custom-container">
            <div class="row">
                <div class="col-12">
                    <div class="mobile-nav-toggler"><i class="fas fa-bars"></i></div>
                    <div class="menu-wrap">
                        <nav class="menu-nav show">
                            <div class="logo">
                                <a href="index.html"><img src="assets/img/logo/logo.png" alt=""></a>
                            </div>
                            <div class="navbar-wrap main-menu d-none d-lg-flex">
                                <ul class="navigation" style="margin-right: 100px;width: 100%;">
                                    <li :class="[{'active':$route.name === 'Dashboard'}]" ><nuxt-link to="/Dashboard">Dashboard</nuxt-link></li>
                                    <li :class="[{'active':$route.name === 'Armazem'}]"><nuxt-link to="/Armazem">Armazem</nuxt-link></li>
                                    <li :class="[{'active':$route.name === 'Projecao'}]"><nuxt-link to="/Projecao">Projeção</nuxt-link></li>
                                    <li style="margin-right:auto" :class="[{'active':$route.name === 'CalculadoraAvulsa'}]"><nuxt-link to="/CalculadoraAvulsa">Calculadora Avulsa</nuxt-link></li>
                                    <li class="active" style="margin-left:auto;margin-right:0.25em">
                                        <a style="padding:7.5px 30px;color:white">
                                            <div class="align-bottom" style="min-width:200px">
                                                <img
                                                class="col-auto"
                                                src="assets\img\content\hydra.webp"
                                                style="height: 15px"
                                                />
                                                <div class="pt-2 d-flex">
                                                    <div class="w-100 align-self-end">USD: ${{hydraUSD}}</div>
                                                    <div class="align-self-end ml-2">
                                                        <span class="badge bg-danger">{{hydraUSDVariacao}}%</span>
                                                    </div>
                                                </div>
                                                <div class="pt-2 d-flex">
                                                   <div class="w-100 align-self-end"> WEMIX: {{hydraWemix}} </div>
                                                   <div class="align-self-end ml-2">
                                                       <span class="badge bg-danger"> {{hydraWemixVariacao}}%</span></div>
                                                </div>
                                                <div class="pt-2 pb-1 d-flex">
                                                    <span class="w-100 align-self-end" style="font-size:12px">Data Atualizacao :</span>
                                                    <span class="w-100 align-self-end" style="font-size:10px">
                                                        {{hydraDate}} UTC   
                                                    </span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="active">
                                        <a style="padding:7.5px 30px;color:white">
                                            <div class="align-bottom" style="min-width:200px">
                                                <img
                                                class="col-auto"
                                                src="assets\img\content\draco.webp"
                                                style="height: 15px"
                                                />
                                                <div class="pt-2 d-flex">
                                                    <div class="w-100 align-self-start">USD: ${{dracoUSD}}</div>
                                                    <div class="align-self-end ml-2 mt-0">
                                                        <span class="badge bg-danger">{{dracoUSDVariacao}}%</span>
                                                    </div>
                                                </div>
                                                <div class="pt-2 d-flex">
                                                   <div class="w-100 align-self-start"> WEMIX: {{dracoWemix}} </div>
                                                   <div class="align-self-end ml-2 mt-0">
                                                       <span class="badge bg-danger"> {{dracoWemixVariacao}}%</span></div>
                                                </div>
                                                <div class="pt-2 pb-1 d-flex">
                                                    <span class="w-100 align-self-end" style="font-size:12px">Data Atualizacao :</span>
                                                    <span class="w-100 align-self-end" style="font-size:10px">
                                                        {{dracoDate}} UTC   
                                                    </span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <!-- Mobile Menu  -->
                    <div class="mobile-menu">
                        <nav class="menu-box">
                            <div class="close-btn"><i class="fas fa-times"></i></div>
                            <div class="nav-logo"><a href="index.html"><img src="assets/img/logo/logo.png" alt="" title=""></a>
                            </div>
                            <div class="menu-outer">
                                <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header-->
                            
                                <ul class="navigation">
                                    <li class="active menu-item-has-children"><a href="#">Home</a>
                                        <ul class="sub-menu">
                                            <li class="active"><a href="index.html">Home One</a></li>
                                            <li><a href="index-2.html">Home Two</a></li>
                                            <li><a href="index-3.html">Home three</a></li>
                                        </ul>
                                    <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div></li>
                                    <li><a href="about-us.html">About Us</a></li>
                                    <li><a href="tournaments.html">Tournament</a></li>
                                    <li class="menu-item-has-children"><a href="#">Blog</a>
                                        <ul class="sub-menu">
                                            <li><a href="blog.html">Our Blog</a></li>
                                            <li><a href="blog-details.html">Blog Details</a></li>
                                        </ul>
                                    <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div></li>
                                    <li class="menu-item-has-children"><a href="#">Pages</a>
                                        <ul class="sub-menu">
                                            <li><a href="our-squad.html">Our Squad</a></li>
                                            <li><a href="match-single.html">Match Single</a></li>
                                            <li><a href="shop.html">Our Shop</a></li>
                                            <li><a href="shop-details.html">Shop Details</a></li>
                                        </ul>
                                    <div class="dropdown-btn"><span class="fas fa-angle-down"></span></div></li>
                                    <li><a href="contact.html">contact</a></li>
                                </ul>
                            </div>
                            <div class="social-links">
                                <ul class="clearfix">
                                    <li><a href="#"><span class="fab fa-twitter"></span></a></li>
                                    <li><a href="#"><span class="fab fa-facebook-square"></span></a></li>
                                    <li><a href="#"><span class="fab fa-pinterest-p"></span></a></li>
                                    <li><a href="#"><span class="fab fa-instagram"></span></a></li>
                                    <li><a href="#"><span class="fab fa-youtube"></span></a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div class="menu-backdrop"></div>
                    <!-- End Mobile Menu -->
                </div>
            </div>
        </div>
        <div class="header-icon">
            <a href="#" class="menu-tigger"><img src="assets/img/icon/hader_icon.png" alt=""></a>
        </div>
    </div>
    <!-- header-search -->
    <div class="search-popup-wrap" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="search-close">
            <span><i class="fas fa-times"></i></span>
        </div>
        <div class="search-wrap text-center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2 class="title">... Search Here ...</h2>
                        <div class="search-form">
                            <form action="#">
                                <input type="text" name="search" placeholder="Type keywords here">
                                <button class="search-btn"><i class="fas fa-search"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
</template>
<script>
import moment from 'moment';
const numeral = require('numeral');

export default {
  name:"HeaderComponent",
  data(){
      return {
          draco: {
            CreatedDT: undefined,
            DracoAmount: undefined,
            DracoAmountPrev: undefined,
            DracoPrice: undefined,
            DracoPriceKlay: undefined,
            DracoPricePrev: undefined,
            DracoPriceWemix: undefined,
            USDDracoRate: undefined,
            USDDracoRatePrev: undefined,
            USDKLAYRate: undefined,
            USDWemixRate: undefined,
            USDWemixRatePrev: undefined,
          },
          hydra: {
            CreatedDT: undefined,
            HydraAmount: undefined,
            HydraAmountPrev: undefined,
            HydraPrice: undefined,
            HydraPriceKlay: undefined,
            HydraPricePrev: undefined,
            HydraPriceWemix: undefined,
            HydraUSDKLAYRate: undefined,
            HydraUSDWemixRate: undefined,
            HydraUSDWemixRatePrev: undefined,
            USDHydraRate: undefined,
            USDHydraRatePrev: undefined
          }
      }
  },
  computed: {
      dracoDate() {
          if(this.draco.CreatedDT === undefined) {
              return ""
          }
          
          return moment(this.draco.CreatedDT).format("DD/MM/yyyy HH:mm")
      },
      dracoUSD() {
          if(this.draco.USDDracoRate === undefined) {
              return numeral(0).format("0.0000")
          }
          return numeral(parseFloat(this.draco.USDDracoRate)).format("0.0000")
      },
      dracoUSDVariacao() {
          if(this.draco.USDDracoRate === undefined) {
              return numeral(0).format("0.0000")
          }
          const valorAtual = parseFloat(this.draco.USDDracoRate)
          const valorAnterior = parseFloat(this.draco.USDDracoRatePrev)
          return numeral((valorAtual/ valorAnterior -1) * 100).format("0.00")
      },
      dracoWemixVariacao() {
          if(this.draco.DracoPrice === undefined) {
              return numeral(0).format("0.0000")
          }
          const valorAtual = parseFloat(this.draco.DracoPrice)
          const valorAnterior = parseFloat(this.draco.DracoPricePrev)
          return numeral((valorAtual/ valorAnterior -1) * 100).format("0.00")
      },
      dracoWemix() {
          if(this.draco.DracoPrice === undefined) {
              return numeral(0).format("0.0000")
          }
          return numeral(parseFloat(this.draco.DracoPrice)).format("0.0000")
      },
      hydraDate() {
          if(this.hydra.CreatedDT === undefined) {
              return ""
          }
          
          return moment(this.hydra.CreatedDT).format("DD/MM/yyyy HH:mm")
      },
      hydraUSD() {
          if(this.hydra.USDHydraRate === undefined) {
              return numeral(0).format("0.0000")
          }
          return numeral(parseFloat(this.hydra.USDHydraRate)).format("0.0000")
      },
      hydraWemix() {
          if(this.hydra.HydraPrice === undefined) {
              return numeral(0).format("0.0000")
          }
          return numeral(parseFloat(this.hydra.HydraPrice)).format("0.0000")
      },
      hydraWemixVariacao() {
          if(this.hydra.HydraPrice === undefined) {
              return numeral(0).format("0.0000")
          }
          const valorAtual = parseFloat(this.hydra.HydraPrice)
          const valorAnterior = parseFloat(this.hydra.HydraPricePrev)
          return numeral((valorAtual/ valorAnterior -1) * 100).format("0.00")
      },
      hydraUSDVariacao() {
          if(this.hydra.USDHydraRate === undefined) {
              return numeral(0).format("0.0000")
          }
          const valorAtual = parseFloat(this.hydra.USDHydraRate)
          const valorAnterior = parseFloat(this.hydra.USDHydraRatePrev)
          return numeral((valorAtual/ valorAnterior -1) * 100).format("0.00")
      },
  },
  mounted() {
    this.$nextTick(() => {
        this.atualizaMoedas()
    })
  },
  methods:{
      atualizaMoedas() {
          const that = this
          const UmMin = 60000
          atualizaMoedasFn()
          setInterval(atualizaMoedasFn, UmMin );

          function atualizaMoedasFn() {
              const baseUrl = 'https://api.mir4global.com/wallet/prices';
              that.$axios.$post('/draco/lastest',undefined,{baseURL:baseUrl}).then(res=> {
                  that.draco = res.Data;
              })
              that.$axios.$post('/hydra/lastest',undefined,{baseURL:baseUrl}).then(res=> {
                  that.hydra = res.Data;
              })

          }
      }

  }
}
</script>