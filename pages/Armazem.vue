<template>
<section class="contact-area" style="padding: 40px 0 120px;">
  <div class="container">
    <div class="row justify-content-center">
      <ul class="nav nav-tabs match-menu my-auto" style="width:auto" role="tablist" id="tabs">
          <li class="nav-item" role="presentation">
              <button  href="#arma"  data-bs-toggle="tab" data-bs-target="#arma" type="button" role="tab" aria-controls="arma"  class="active" aria-selected="true">
                Arma / Arma Secundária</button>
          </li>
          <li class="nav-item" role="presentation">
              <button   href="#torsoPernaLuva" data-bs-toggle="tab" data-bs-target="#torsoPernaLuva" type="button" role="tab" aria-controls="torsoPernaLuva" >
                Torso / Pernas / Luvas / Botas
              </button>
          </li>
          <li class="nav-item" role="presentation">
              <button  href="#colarPulseiraAnelBrinco"  data-bs-toggle="tab" data-bs-target="#colarPulseiraAnelBrinco" type="button" role="tab" aria-controls="colarPulseiraAnelBrinco">
                Colar / Pulseiras / Anel / Brincos
              </button>
          </li>
      </ul>
      <div class="row">
        <div class="col-md-3">
          <div class="row pt-3">
            <div class="row py-3">
              <h4> Outros </h4>
            </div>
            <div class="">
                <ArmazemItem
                  img="assets\img\content\cobre.webp"
                  title="Cobre"
                  :no-type="true"
                  item="cobre"
                  :full-width="true"
                />
            </div>
            <div class="row py-3">
              <h4> &nbsp; </h4>
            </div>
            <div class="">
              <ArmazemItem
                img="assets\img\content\darksteel.webp"
                title="Darksteel"
                :no-type="true"
                item="darksteel"
                :full-width="true"
              />
            </div>
            <div class="row py-3">
              <h4> &nbsp; </h4>
            </div>
            <div class="">
              <ArmazemItem
                img="assets\img\content\Item_Production_Meterial01_TwinclePowder.png"
                :no-type="true"
                title="Pó de ouro"
                tipo="incomum"
                item="po"
                :full-width="true"
              />
            </div>
          </div>
        </div>
        <div class="col-md-9">
          <div id="tabContent" class="tab-content pt-3"> 
            <div id="arma" class="tab tab-pane fade active show"  >
              <div class="col-md-12">
                <div class="col-md-12">
                  <div class="row py-3">
                    <h4> Lendário </h4>
                  </div>
                  <div class="row">
                    <ArmazemItem img="assets\img\content\Item_Mineing_004.png" title="Aço" tipo="lendario"  item="aco"/>
                    <ArmazemItem img="assets\img\content\Item_Production_DarkHeartStone_01.png" title="Esfera Perversa" tipo="lendario" item="esferaPerversa"/>
                    <ArmazemItem img="assets\img\content\Item_Production_MoonShadowStone_01.png" title="Pedra de Sombra Lunar" tipo="lendario" item="pedraLunar"/>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="row py-3">
                    <h4> Epico </h4>
                  </div>
                  <div class="row">
                    <ArmazemItem img="assets\img\content\Item_Mineing_004.png" title="Aço" tipo="epico" item="aco"/>
                    <ArmazemItem img="assets\img\content\Item_Production_DarkHeartStone_01.png" title="Aço" tipo="epico" item="aco"/>
                    <ArmazemItem img="assets\img\content\Item_Production_MoonShadowStone_01.png" title="Aço" tipo="epico" item="aco"/>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="row py-3">
                    <h4> Raro </h4>
                  </div>
                  <div class="row">
                    <ArmazemItem img="assets\img\content\Item_Mineing_004.png" title="Aço" tipo="raro" item="aco"/>
                    <ArmazemItem img="assets\img\content\Item_Production_DarkHeartStone_01.png" title="Aço" tipo="raro" item="aco"/>
                    <ArmazemItem img="assets\img\content\Item_Production_MoonShadowStone_01.png" title="Aço" tipo="raro" item="aco"/>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="row py-3">
                    <h4> Incomum </h4>
                  </div>
                  <div class="row">
                    <ArmazemItem img="assets\img\content\Item_Mineing_004.png" title="Aço" tipo="incomum" item="aco"/>
                    <ArmazemItem img="assets\img\content\Item_Production_DarkHeartStone_01.png" title="Aço" tipo="incomum" item="aco"/>
                    <ArmazemItem img="assets\img\content\Item_Production_MoonShadowStone_01.png" title="Aço" tipo="incomum" item="aco"/>
                  </div>
                </div>
              </div>
            </div>
            <div id="torsoPernaLuva" class="tab tab-pane fade"  >
              <div class="col-md-12">
                <div class="col-md-12">
                  <div class="row py-3">
                    <h4> Lendário </h4>
                  </div>
                  <div class="row">
                    <ArmazemItem img="assets\img\content\Item_Mineing_004.png" title="Aço" tipo="lendario"  item="aco"/>
                    <ArmazemItem img="assets\img\content\Item_Production_DarkHeartStone_01.png" title="Esfera Perversa" tipo="lendario" item="esferaPerversa"/>
                    <ArmazemItem img="assets\img\content\Item_Production_MoonShadowStone_01.png" title="Pedra de Sombra Lunar" tipo="lendario" item="pedraLunar"/>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="row py-3">
                    <h4> Epico </h4>
                  </div>
                  <div class="row">
                    <ArmazemItem img="assets\img\content\Item_Mineing_004.png" title="Aço" tipo="epico" item="aco"/>
                    <ArmazemItem img="assets\img\content\Item_Production_DarkHeartStone_01.png" title="Aço" tipo="epico" item="aco"/>
                    <ArmazemItem img="assets\img\content\Item_Production_MoonShadowStone_01.png" title="Aço" tipo="epico" item="aco"/>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="row py-3">
                    <h4> Raro </h4>
                  </div>
                  <div class="row">
                    <ArmazemItem img="assets\img\content\Item_Mineing_004.png" title="Aço" tipo="raro" item="aco"/>
                    <ArmazemItem img="assets\img\content\Item_Production_DarkHeartStone_01.png" title="Aço" tipo="raro" item="aco"/>
                    <ArmazemItem img="assets\img\content\Item_Production_MoonShadowStone_01.png" title="Aço" tipo="raro" item="aco"/>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="row py-3">
                    <h4> Incomum </h4>
                  </div>
                  <div class="row">
                    <ArmazemItem img="assets\img\content\Item_Mineing_004.png" title="Aço" tipo="incomum" item="aco"/>
                    <ArmazemItem img="assets\img\content\Item_Production_DarkHeartStone_01.png" title="Aço" tipo="incomum" item="aco"/>
                    <ArmazemItem img="assets\img\content\Item_Production_MoonShadowStone_01.png" title="Aço" tipo="incomum" item="aco"/>
                  </div>
                </div>
              </div>
            </div>
            <div id="colarPulseiraAnelBrinco" class="tab tab-pane fade"  >
              <div class="col-md-12">
                <div class="col-md-12">
                  <div class="row py-3">
                    <h4> Lendário </h4>
                  </div>
                  <div class="row">
                    <ArmazemItem img="assets\img\content\Item_Mineing_004.png" title="Aço" tipo="lendario"  item="aco"/>
                    <ArmazemItem img="assets\img\content\Item_Production_DarkHeartStone_01.png" title="Esfera Perversa" tipo="lendario" item="esferaPerversa" />
                    <ArmazemItem img="assets\img\content\Item_Production_MoonShadowStone_01.png" title="Pedra de Sombra Lunar" tipo="lendario" item="pedraLunar"/>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="row py-3">
                    <h4> Epico </h4>
                  </div>
                  <div class="row">
                    <ArmazemItem img="assets\img\content\Item_Mineing_004.png" title="Aço" tipo="epico" item="aco"/>
                    <ArmazemItem img="assets\img\content\Item_Production_DarkHeartStone_01.png" title="Aço" tipo="epico" item="aco"/>
                    <ArmazemItem img="assets\img\content\Item_Production_MoonShadowStone_01.png" title="Aço" tipo="epico" item="aco"/>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="row py-3">
                    <h4> Raro </h4>
                  </div>
                  <div class="row">
                    <ArmazemItem img="assets\img\content\Item_Mineing_004.png" title="Aço" tipo="raro" item="aco"/>
                    <ArmazemItem img="assets\img\content\Item_Production_DarkHeartStone_01.png" title="Aço" tipo="raro" item="aco"/>
                    <ArmazemItem img="assets\img\content\Item_Production_MoonShadowStone_01.png" title="Aço" tipo="raro" item="aco"/>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="row py-3">
                    <h4> Incomum </h4>
                  </div>
                  <div class="row">
                    <ArmazemItem img="assets\img\content\Item_Mineing_004.png" title="Aço" tipo="incomum" item="aco"/>
                    <ArmazemItem img="assets\img\content\Item_Production_DarkHeartStone_01.png" title="Aço" tipo="incomum" item="aco"/>
                    <ArmazemItem img="assets\img\content\Item_Production_MoonShadowStone_01.png" title="Aço" tipo="incomum" item="aco"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
<script>
export default {
  name:"ArmazemPage"
}
</script>
