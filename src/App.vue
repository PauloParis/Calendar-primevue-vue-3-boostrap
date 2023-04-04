<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-lg-6">
        <div class="text-center mt-3 bg-primary text-white h4 p-3 rounded">
          Elige una Fecha
        </div>
        <Calendar
          style="display: flex"
          class="altura"
          v-model="date"
          dateFormat="dd/mm/yy"
          :minDate="minDate"
          :maxDate="maxDate"
          inline
          showWeek
          @date-select="getDolar(date)"
        />
      </div>
      <div class="col-12 col-lg-6">
        <div class="rounded mt-3 bg-success color">
          <div class="text-center h4 p-3 text-white">Información</div>
        </div>
        <div class="img altura overflow-auto">
          <div
            class="text-white text-center h5 pb-2 pt-2 ps-4"
            style="background-color: #084298"
          >
            Fecha: {{ fecha }}
          </div>

          <div class="row m-0 justify-content-center align-items-center" style="height: 85%;">
            <ProgressSpinner
              strokeWidth="6"
              class="col-12"
              v-if="loading"
              style="width: 100px; height: 100px"
            />

            <div v-else class="col-12">
              <div class="row">
                <div class="col-12 col-lg-6">
                  <div class="bg-success bg-opacity-75 rounded m-2 p-3">
                    <div class="text-white">
                      <div class="row ms-md-1 ms-2 align-items-center">
                        <!-- row align-items-center -->
                        <div class="col" style="display: contents">
                          <i
                            class="pi pi-dollar border border-white p-1 rounded-circle"
                            style="font-size: 2rem"
                          ></i>
                        </div>
                        <div class="col d-inline">
                          <div class="row align-items-center">
                            <div
                              class="col-4 col-md-12"
                              style="font-size: 20px"
                            >
                              <strong>DOLAR</strong>
                            </div>
                            <div
                              class="col-8 ps-3 col-md-12"
                              style="font-size: 30px"
                            >
                              {{ dolar }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-6">
                  <div
                    class="bg-opacity-75 rounded m-2 p-3"
                    style="background-color: #432874; opacity: 0.8"
                  >
                    <div class="text-white">
                      <div class="row ms-md-1 ms-2 align-items-center">
                        <div class="col" style="display: contents">
                          <i
                            class="pi pi-dollar border border-white p-1 rounded-circle"
                            style="font-size: 2rem"
                          ></i>
                        </div>
                        <div class="col d-inline">
                          <div class="row align-items-center">
                            <div
                              class="col-4 col-md-12"
                              style="font-size: 20px"
                            >
                              <strong>EURO</strong>
                            </div>
                            <div
                              class="col-8 ps-3 col-md-12"
                              style="font-size: 30px"
                            >
                              {{ euro }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-6">
                  <div class="bg-dark bg-opacity-75 rounded m-2 p-3">
                    <div class="text-white">
                      <div class="row ms-md-1 ms-2 align-items-center">
                        <div class="col" style="display: contents">
                          <i
                            class="pi pi-dollar border border-white p-1 rounded-circle"
                            style="font-size: 2rem"
                          ></i>
                        </div>
                        <div class="col d-inline">
                          <div class="row align-items-center">
                            <div
                              class="col-4 col-md-12"
                              style="font-size: 20px"
                            >
                              <strong>UF</strong>
                            </div>
                            <div
                              class="col-8 ps-3 col-md-12"
                              style="font-size: 30px"
                            >
                              {{ uf }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-6">
                  <div class="bg-dark bg-opacity-75 rounded m-2 p-3">
                    <div class="text-white">
                      <div class="row ms-md-1 ms-2 align-items-center">
                        <div class="col" style="display: contents">
                          <i
                            class="pi pi-dollar border border-white p-1 rounded-circle"
                            style="font-size: 2rem"
                          ></i>
                        </div>
                        <div class="col d-inline">
                          <div class="row align-items-center">
                            <div
                              class="col-4 col-md-12"
                              style="font-size: 20px"
                            >
                              <strong>UTM</strong>
                            </div>
                            <div
                              class="col-8 ps-3 col-md-12"
                              style="font-size: 30px"
                            >
                              {{ utm }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div
                    class="rounded m-2 p-3"
                    style="background-color: #997404; opacity: 0.8"
                  >
                    <div class="text-white">
                      <div class="row ms-md-1 ms-2 align-items-center">
                        <div class="col" style="display: contents">
                          <i
                            class="pi pi-dollar border border-white p-1 rounded-circle"
                            style="font-size: 2rem"
                          ></i>
                        </div>
                        <div class="col d-inline">
                          <div class="row align-items-center">
                            <div
                              class="col-4 col-md-12"
                              style="font-size: 20px"
                            >
                              <strong>BITCOIN</strong>
                            </div>
                            <div
                              class="col-8 ps-3 col-md-12"
                              style="font-size: 30px"
                            >
                              {{ bitcoin }}
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
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import axios from "axios";
import ProgressSpinner from "primevue/progressspinner";

const date = ref("");

const dolar = ref(null);
const euro = ref(null);
const uf = ref(null);
const utm = ref(null);
const bitcoin = ref(null);

const loading = ref();

const minDate = ref(new Date("01-01-1984"));
const maxDate = ref(new Date());

const fecha = computed(() => {
  return date.value ? date.value.toLocaleDateString() : "Escoger Fecha";
});

const getDolar = async (fecha) => {
  try {
    loading.value = true;
    const dia = fecha.toLocaleDateString();
    let dol = await axios.get(`https://mindicador.cl/api/dolar/${dia}`);
    let unf = await axios.get(`https://mindicador.cl/api/uf/${dia}`);
    let untm = await axios.get(`https://mindicador.cl/api/utm/${dia}`);
    let eu = await axios.get(`https://mindicador.cl/api/euro/${dia}`);
    let bit = await axios.get(`https://mindicador.cl/api/bitcoin/${dia}`);

    dolar.value = dol.data.serie[0] ? parseFloat((dol.data.serie[0].valor)).toLocaleString('es-ES') : "No Info";
    euro.value = eu.data.serie[0] ? (parseFloat(eu.data.serie[0].valor).toLocaleString('es-ES')) : "No Info";
    uf.value = unf.data.serie[0] ? (parseFloat(unf.data.serie[0].valor)).toLocaleString('es-ES') : "No Info"; 
    utm.value = untm.data.serie[0] ? (parseFloat(untm.data.serie[0].valor)).toLocaleString('es-ES') : "No Info";
    bitcoin.value = bit.data.serie[0] ? (parseFloat(bit.data.serie[0].valor)).toLocaleString('es-ES')  : "No Info";
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};
</script>
