<template>
  <section class="contact-area" style="padding: 40px 0 120px">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <ul
            id="tabs"
            class="nav nav-tabs match-menu"
            style="width: auto;"
            role="tablist"
          >
            <li class="nav-item" role="presentation">
              <button
                href="#arma"
                data-bs-toggle="tab"
                data-bs-target="#arma"
                type="button"
                role="tab"
                aria-controls="arma"
                class="active"
                aria-selected="true"
              >
                Arma / Arma Secundária
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                href="#torsoPernaLuva"
                data-bs-toggle="tab"
                data-bs-target="#torsoPernaLuva"
                type="button"
                role="tab"
                aria-controls="torsoPernaLuva"
              >
                Torso / Pernas / Luvas / Botas
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                href="#colarPulseiraAnelBrinco"
                data-bs-toggle="tab"
                data-bs-target="#colarPulseiraAnelBrinco"
                type="button"
                role="tab"
                aria-controls="colarPulseiraAnelBrinco"
              >
                Colar / Pulseiras / Anel / Brincos
              </button>
            </li>
          </ul>
          <div id="tabContent" class="tab-content pt-4">
            <div id="arma" class="tab tab-pane fade active show">
              <div class="row justify-content-center">
                <div class="col-auto">
                  <div class="pretty p-switch p-fill">
                    <input type="checkbox" />
                    <div class="state p-lendario">
                      <label class="pretty-state-label">Lendário</label>
                    </div>
                  </div>
                </div>
                <div class="col-auto">
                  <div class="pretty p-switch p-fill">
                    <input type="checkbox" />
                    <div class="state p-epico">
                      <label class="pretty-state-label">Épico</label>
                    </div>
                  </div>
                </div>
                <div class="col-auto">
                  <div class="pretty p-switch p-fill">
                    <input type="checkbox" />
                    <div class="state p-raro">
                      <label class="pretty-state-label">Raro</label>
                    </div>
                  </div>
                </div>
                <div class="col-auto">
                  <div class="pretty p-switch p-fill">
                    <input type="checkbox" />
                    <div class="state p-incomum">
                      <label class="pretty-state-label">Incomum</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row pt-3 pb-3 justify-content-center">
                <div class="col-md-3">
                  <div class="row align-bottom">
                    <img
                      class="col-auto"
                      src="assets\img\content\cobre.webp"
                      style="width: 60px; height: 30px"
                    />
                    <h6 class="col-auto mb-0" style="line-height: 30px">
                      Cobre
                    </h6>
                  </div>
                  <div class="row">
                    <div class="col-md-6">Atual</div>
                    <div class="col-md-6">1000</div>
                    <div class="col-md-6">Faltando</div>
                    <div class="col-md-6">1000</div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="row align-bottom">
                    <img
                      class="col-auto"
                      src="assets\img\content\darksteel.webp"
                      style="width: 60px; height: 30px"
                    />
                    <h6 class="col-auto mb-0" style="line-height: 30px">
                      Darksteel
                    </h6>
                  </div>
                  <div class="row">
                    <div class="col-md-6">Atual</div>
                    <div class="col-md-6">1000</div>
                    <div class="col-md-6">Faltando</div>
                    <div class="col-md-6">1000</div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="row align-bottom">
                    <img
                      class="col-auto"
                      src="assets\img\content\Item_Production_Meterial01_TwinclePowder.png"
                      style="width: 60px; height: 30px"
                    />
                    <h6 class="col-auto mb-0" style="line-height: 30px">
                      Pó de ouro
                    </h6>
                  </div>
                  <div class="row">
                    <div class="col-md-6">Atual</div>
                    <div class="col-md-6">1000</div>
                    <div class="col-md-6">Faltando</div>
                    <div class="col-md-6">1000</div>
                  </div>
                </div>
                <!-- <div class="col-md-3">
                  <h4>Custo para criar o item</h4>
                  <div class="row justify-content-center">
                    <div class="col-12 py-4">
                      <div class="row">
                        <h6 class="col-auto mb-0" style="line-height: 30px">
                          <img src="assets\img\content\cobre.webp" style="height: 28px;margin-top:-4px" />
                          Cobre
                        </h6>
                        <h4 class="col text-end" style="width:100%">1000 / 1000</h4>
                      </div>
                    </div>
                    <div class="col-12 py-4">
                      <div class="row">
                        <h6 class="col-auto mb-0" style="line-height: 30px">
                          <img src="assets\img\content\cobre.webp" style="height: 28px;margin-top:-4px" />
                          Darksteel
                        </h6>
                        <h4 class="col text-end" style="width:100%">1000 / 1000</h4>
                      </div>
                    </div>
                  </div>
                </div> -->
              </div>
              <div class="row pt-3 justify-content-center">
                <div class="col-md-12">
                  <h4>Custo à partir de Incomum</h4>
                  <div class="row">
                    <div class="py-2">
                      <h3>Raro</h3>
                      <div class="row justify-content-center">
                        <DashboardItem img="assets\img\content\Item_Mineing_004.png" title="Aço" tipo="raro" tipo-base="incomum"  item="aco"/>
                        <DashboardItem img="assets\img\content\Item_Production_DarkHeartStone_01.png" title="Esfera Perversa" tipo="raro" tipo-base="incomum" item="esferaPerversa" />
                        <DashboardItem img="assets\img\content\Item_Production_MoonShadowStone_01.png" title="Pedra de Sombra Lunar" tipo="raro" tipo-base="incomum" item="pedraLunar"/>
                      </div>
                    </div>
                    <div class="py-2">
                      <h3>Épico</h3>
                      <div class="row justify-content-center">
                        <DashboardItem img="assets\img\content\Item_Mineing_004.png" title="Aço" tipo="epico" tipo-base="raro"  item="aco"/>
                        <DashboardItem img="assets\img\content\Item_Production_DarkHeartStone_01.png" title="Esfera Perversa" tipo="epico" tipo-base="raro" item="esferaPerversa" />
                        <DashboardItem img="assets\img\content\Item_Production_MoonShadowStone_01.png" title="Pedra de Sombra Lunar" tipo="epico" tipo-base="raro" item="pedraLunar"/>
                      </div>
                    </div>
                    <div class="py-2">
                      <h3>Lendário</h3>
                      <div class="row justify-content-center">
                        <DashboardItem img="assets\img\content\Item_Mineing_004.png" title="Aço" tipo="lendario" tipo-base="epico"  item="aco"/>
                        <DashboardItem img="assets\img\content\Item_Production_DarkHeartStone_01.png" title="Esfera Perversa" tipo="lendario" tipo-base="epico" item="esferaPerversa" />
                        <DashboardItem img="assets\img\content\Item_Production_MoonShadowStone_01.png" title="Pedra de Sombra Lunar" tipo="lendario" tipo-base="epico" item="pedraLunar"/>
                      </div>
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
  name: 'DashboardPage',
}
</script>
<style scoped>
.pretty-state-label {
  font-family: 'Oswald', sans-serif;
  color: #fff;
  margin-top: 0px;
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 18px;
}
.pretty.p-switch .state:before {
  top: calc((0% - (100% - 20px)) - 16%) !important;
  height: calc(18px + 2px) !important;
}

.pretty.p-switch .state label:after,
.pretty.p-switch .state label:before {
  margin-top: 2px !important;
}

.pretty.p-switch.p-fill input:checked ~ .state.p-lendario:before {
  background-color: #bca109 !important;
  border-color: #bca109 !important;
}

.pretty.p-switch.p-fill input:checked ~ .state.p-epico:before {
  background-color: #ab2725 !important;
  border-color: #ab2725 !important;
}

.pretty.p-switch.p-fill input:checked ~ .state.p-raro:before {
  background-color: #295491 !important;
  border-color: #295491 !important;
}

.pretty.p-switch.p-fill input:checked ~ .state.p-incomum:before {
  background-color: #348a6b !important;
  border-color: #348a6b !important;
}
</style>
