<template>
  <div class="col-md-3 col-xs-4">
    <div class="just-gamer-content-box" style="padding:24px 21.5px 12px">
      <div class="row">
        <h6 class=" col text-center">{{title}}</h6>
        <div class="col-12">
          <div class="dasbhoard-card-item mx-auto" style="width:90px" :class="tipo">
              <img :src="img" />
          </div>
        </div>
        <div class="col-12 mt-4">
          <div class="row"> 
            <h6 class="col-auto">Atual {{tipo}}</h6>
            <div class="col text-end">
              {{totalItem}} /{{definicoesCriacao}}
            </div>
          </div>
          <div class="row"> 
            <h6 class="col-auto">Atual {{tipoBase}}</h6>
            <div class="col text-end">
              {{totalItemIncomum}} / {{calculoIncomumTotalFaltaConvertido}} / {{calculoIncomumTotal}}
            </div>
          </div>
          <div class="row" style="line-height: 30px;"> 
            <div class="col-auto">
              <div class="row">
              <img
                  class=""
                  src="assets\img\content\cobre.webp"
                  style="width: 60px"
                />
                <h6 class="mb-0" style="display: contents;">
                  Cobre
                </h6>
              </div>
            </div>
            <div class="col text-end">
              {{obterTotalCobre}} / {{calculoIncomumCobre}}
            </div>
          </div>
          <div class="row" style="line-height: 30px;"> 
            <div class="col-auto">
              <div class="row">
              <img
                  class=""
                  src="assets\img\content\darksteel.webp"
                  style="width: 60px"
                />
                <h6 class="mb-0" style="display: contents;">
                  Darksteel
                </h6>
              </div>
            </div>
            <div class="col text-end">
              {{obterTotalDarksteel}} / {{calculoIncomumDarksteel}}
            </div>
          </div>
          <div class="row" style="line-height: 30px;"> 
            <div class="col-auto">
              <div class="row">
              <img
                  class=""
                  src="assets\img\content\Item_Production_Meterial01_TwinclePowder.png"
                  style="width: 60px"
                />
                <h6 class="mb-0" style="display: contents;">
                  Pó de ouro
                </h6>
              </div>
            </div>
            <div class="col text-end">
              {{obterTotalPo}} / {{calculoIncomumPo}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import CalculoMixin from '~/mixins/calculo.vue'
const numeral = require('numeral');
require('numeral/locales/pt-br');
numeral.locale('pt-br');

export default {
  name:"DashboardItem",
  mixins:[
    CalculoMixin
  ],
  props:{
    tipo:{
      type:String,
      default:undefined
    },
    tipoBase: {
      type:String,
      default:undefined
    },
    item:{
      type:String,
      required:true,
      default:""
    },
    img: {
      type:String,
      required:true,
      default:""
    },
    title: {
      type:String,
      required:true,
      default:""
    },
  },
  computed: {
     totalItem () {
      if(this.tipo === undefined || this.item === "") {
          return numeral(0).format("0,0")
        }
        return numeral(this.valorAtualPorTipoItem(this.tipo,this.item)).format("0,0");
    },
    totalItemIncomum () {
      if(this.tipo === undefined || this.item === "") {
          return numeral(0).format("0,0")
        }
        return numeral(this.valorAtualPorTipoItem("incomum",this.item)).format("0,0");
    },
    calculoIncomumTotalFaltaConvertido() {
      const calculoItem = this.calculo;
      if(calculoItem && calculoItem.incomum) {
        return numeral(calculoItem.incomum.totalFaltaConvertido).format("0,0");
      }
      return numeral(0).format("0,0");
    },
    calculoIncomumTotal() {
      const calculoItem = this.calculo;
      if(calculoItem && calculoItem.incomum) {
        return numeral(calculoItem.incomum.total).format("0,0");
      }
      return numeral(0).format("0,0");
    },
    calculoIncomumCobre() {
      const calculoItem = this.calculo;
      if(calculoItem && calculoItem.incomum) {
        return numeral(calculoItem.incomum.totalCobre).format("0,0");
      }
      return numeral(0).format("0,0");
    },
    calculoIncomumDarksteel() {
      const calculoItem = this.calculo;
      if(calculoItem && calculoItem.incomum) {
        return numeral(calculoItem.incomum.totalDarksteel).format("0,0");
      }
      return numeral(0).format("0,0");
    },
    calculoIncomumPo() {
      const calculoItem = this.calculo;
      if(calculoItem && calculoItem.incomum) {
        return numeral(calculoItem.incomum.totalPo).format("0,0");
      }
      return numeral(0).format("0,0");
    },
    obterTotalCobre () {
      return this.valorAtualPorItem("cobre");
    },
    obterTotalDarksteel () {
      return this.valorAtualPorItem("darksteel");
    },
    obterTotalPo () {
      return this.valorAtualPorItem("po");
    },
    calculo() {
      return this.calculoItem(this.tipo,this.item);
    },
    definicoesCriacao() {
      return numeral(this.definicoesCriacaoTipoItem(this.tipo,this.item)).format("0,0");
    },
    definicoesCriacaoCobre() {
      return numeral(this.definicoesCriacaoTipoItem(this.tipo,"cobreItem")).format("0,0");
    },
    definicoesCriacaoDarksteel() {
      return numeral(this.definicoesCriacaoTipoItem(this.tipo,"darksteelItem")).format("0,0");
    },
  }
}
</script>