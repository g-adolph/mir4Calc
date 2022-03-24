<script>

const definicoesCriacaoItem = {
  incomum :{
    aco:40,
    esferaPerversa:4,
    pedraLunar:4,
    cobreItem:1000,
    darksteelItem:1000
  },
  raro :{
    aco:75,
    esferaPerversa:25,
    pedraLunar:25,
    cobreItem:50000,
    darksteelItem:50000
  },
  epico :{
    aco:300,
    esferaPerversa:100,
    pedraLunar:100,
    cobreItem:3200000,
    darksteelItem:400000
  },
  lendario :{
    aco:300,
    esferaPerversa:100,
    pedraLunar:100,
    cobreItem:10000000,
    darksteelItem:10000000
  }
}

const definicoesCriacaoMaterial = {
  incomum : {
    material: 10,
    cobreItem:400,
    darksteelItem:200
  },
  raro : {
    material: 10,
    po:2,
    cobreItem:2000,
    darksteelItem:1000
  },
  epico : {
    material: 10,
    po:25,
    cobreItem:20000,
    darksteelItem:5000
  },
  lendario : {
    material: 10,
    po:25,
    cobreItem:100000,
    darksteelItem:25000
  }
}

const numeral = require('numeral');
require('numeral/locales/pt-br');
numeral.locale('pt-br');
export default {
  name:"CalculoMixin",
  methods: {
    definicoesCriacaoMaterial(tipo) {
      return definicoesCriacaoMaterial[tipo];
    },
    definicoesCriacaoTipoItem(tipo, item) {
      return definicoesCriacaoItem[tipo][item];
    },
    calculoItem(tipo,item) {
      if(tipo ==='raro') {
        const definicoesCriacaoItemRaro = this.definicoesCriacaoTipoItem(tipo,item);
        const raro = this.calculoFaltaItem(tipo,item,definicoesCriacaoItemRaro,this.valorAtualPorTipoItem(tipo,item))
        const incomum = this.calcularConversao(
          "raro",
          "incomum",
          item,
          raro.totalFalta)

        console.table( raro )
        console.table( incomum )

        return { raro, incomum }
      }
    },

    calculoFaltaItem(tipo,item, totalDefinicaoCriacaoItem, totalAtualItem) {
      const totalFalta = totalDefinicaoCriacaoItem - totalAtualItem
      return { totalDefinicaoCriacaoItem, totalAtualItem, totalFalta }
    },
    calcularConversao(tipo,tipoConversao,item, totalFalta) {
      const definicoesCriacaoMaterial = this.definicoesCriacaoMaterial(tipo);
      const totalAtualItem = this.valorAtualPorTipoItem(tipoConversao,item);
      const total = (definicoesCriacaoMaterial.material * totalFalta) - totalAtualItem

      return {
        material : definicoesCriacaoMaterial.material, 
        totalAtualItem,
        totalFalta,
        totalFaltaConvertido: totalFalta * definicoesCriacaoMaterial.material, 
        total,
        totalPo: total * (definicoesCriacaoMaterial.po || 0),
        totalDarksteel: total * definicoesCriacaoMaterial.darksteelItem,
        totalCobre: total * definicoesCriacaoMaterial.cobreItem
      }
    },


    calcularTipo(tipo,item,valorTotal,valor, totalItemPo, totalItemCobre,totalItemDarksteel) {
      const totalTipoItem = this.valorAtualPorTipoItem(tipo,item);
      const totalCriacaoItem = valorTotal - valor < 0 ? 0 : valorTotal - valor ; // * this.definicoesCriacaoMaterial(tipo).material;

      const faltaTotalItem = totalCriacaoItem - totalTipoItem < 0 ? 0 :totalCriacaoItem - totalTipoItem;
      console.table({
          label:`calcularTipo:: ${tipo} - ${item}`,
          totalTipoItem,
          valorTotal,
          valor,
          totalCriacaoItem,
          faltaTotalItem,
          totalItemPo, totalItemCobre,totalItemDarksteel
        }
      )

      return {
        totalCriacaoItem,
        totalTipoItem,
        faltaTotalItem,
        totalPo: faltaTotalItem * totalItemPo,
        totalCobre: faltaTotalItem * totalItemCobre,
        totalDarksteel: faltaTotalItem * totalItemDarksteel,
      }
    },
    valorAtualPorTipoItem(tipo,item) {
      return this.$store.state.armazem[tipo][item];
    },
    valorAtualPorItem(item) {
      return this.$store.state.armazem[item];
    }

  }
}
</script>