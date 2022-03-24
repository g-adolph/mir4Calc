<template>
<div class="py-3" :class="[{'col-4':!fullWidth,'col-12':fullWidth}]">
  <div class="row">
      <div class="col-md-10 offset-md-1">
        <h6 class="text-right">{{title}}</h6>
        <div class="row">
          <div class="col-md-6">
            <div style="width:110px;">
              <div class="card-item" :class="tipo">
                <img :src="img" width="80"/>
                <span class="enchance"></span>
                <span class="quantity">{{totalItem}}</span>
              </div>
            </div>
          </div>
        <div v-if="possuiHistorico" class="col-auto align-self-center">
          <button class="btn ml-auto">
            <fa icon="clock-rotate-left" />
          </button>
        </div>
        </div>
      </div>
      <div class="col-md-10 offset-md-1" style="margin-top:16px">
          <div class="row">
            <div class="col-md-6" >
              <div class="form-grp">
                <input v-model="itemQtd" type="number" class="" style="width:110px;" />
              </div>
            </div>
            <div class="col-auto">
              <button class="btn ml-auto" type="button" @click.prevent="adicionar()">
                <fa icon="circle-plus" />
              </button>
            </div>
          </div>    
      </div>
  </div>
</div>
</template>
<script>

import {isNaN} from 'lodash'
import { mapGetters } from 'vuex'
import CalculoMixin from '~/mixins/calculo.vue'
const numeral = require('numeral');
require('numeral/locales/pt-br');
numeral.locale('pt-br');
export default {
  name:"ArmazemItem",
  mixins: [
    CalculoMixin
  ],
  props:{
    tipo:{
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
    fullWidth: {
      type: Boolean,
      required:false,
      default:false
    },
    noType: {
      type: Boolean,
      required:false,
      default:false
    },
  },
  data() {
    return {
      itemQtd: ''
    }
  },
  computed: {
    totalItem () {
      if(this.noType === false) {
        if(this.tipo === undefined || this.item === "") {
          return numeral(0).format("0,0")
        }
        return numeral(this.valorAtualPorTipoItem(this.tipo,this.item)).format("0,0");
      }
      if(this.item === "") {
        return numeral(0).format("0,0")
      }
      return numeral(this.valorAtualPorItem(this.item)).format("0,0");
    },
    totalHistoricoItem () {
      if(this.noType === false) {
        if(this.tipo === undefined || this.item === "") {
          return  null
        }
        return this.historicoItem(this.tipo,this.item)
      }
      if(this.item === "") {
        return null
      }
      return this.historicoItem(undefined,this.item)
    },
    possuiHistorico () {
      const historico = this.totalHistoricoItem
      return historico != null && historico != null &&  historico.length !== 0
    },
    ...mapGetters({
      'historicoItem':'armazem/historicoItem'
    })
  },
  methods:{
    adicionar() {
       const value = parseInt(this.itemQtd);
       if(isNaN(value)) {
         return;
       }
       const parametros = {
         tipo:this.tipo, 
         item: this.item, 
         valor: value
       }
       this.$store.commit('armazem/adicionarItem',parametros )
       this.itemQtd = '';
       this.$toasted.success(`${this.title} modificado com sucesso!`, {
         position: "bottom-right", 
         duration : 1000
       })
    },
    
  }
}
</script>