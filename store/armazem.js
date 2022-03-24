import {filter,orderBy} from "lodash"
export const state = () => ({
  ouro:0,
  cobre:0,
  po:0,
  darksteel:0,
  lendario:{
    bugiganga:0,
    pedraLunar:0,
    pedraDeAnima:0,
    fragmentoIluminante:0,
    quintessencia:0,
    esferaPerversa:0,
    platina:0,
    aco:0,
  },
  epico:{
    bugiganga:0,
    pedraLunar:0,
    pedraDeAnima:0,
    fragmentoIluminante:0,
    quintessencia:0,
    esferaPerversa:0,
    platina:0,
    aco:0,
  },
  raro:{
    bugiganga:0,
    pedraLunar:0,
    pedraDeAnima:0,
    fragmentoIluminante:0,
    quintessencia:0,
    esferaPerversa:0,
    platina:0,
    aco:0,
  },
  incomum:{
    bugiganga:0,
    pedraLunar:0,
    pedraDeAnima:0,
    fragmentoIluminante:0,
    quintessencia:0,
    esferaPerversa:0,
    platina:0,
    aco:0,
  },
  historico: []
})

const historicoItem = (data, tipo, item, valor) =>{
  return {
    data,
    tipo,
    item,
    valor
  }
}
export const getters = {
  historicoItem: (state) => (tipo,item) => {
    return orderBy(filter(state.historico,(historicoItem) => historicoItem.tipo === tipo && historicoItem.item === item),"data");
  }

}

export const mutations = {
  adicionarOuro(state, valor) {
    state.ouro +=valor;
  },
  adicionarCobre(state, valor) {
    state.cobre +=valor;
  },
  adicionarPo(state, valor) {
    state.po +=valor;
  },
  adicionarItem(state, parametros) {
    if(parametros.tipo === undefined) {
      state[parametros.item] +=parametros.valor;
    }
    else {
      state[parametros.tipo][parametros.item] +=parametros.valor;
    }
    mutations.adicionarHistorico(state,parametros);
  },
  adicionarHistorico(state,parametros) {
    state.historico.push(historicoItem(new Date(), parametros.tipo, parametros.item, parametros.valor));
  }
}