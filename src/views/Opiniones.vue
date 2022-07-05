<template>
  <div>
    <h1>Listado de Opiniones</h1>
    <div class="container" v-if="count == 0">
      <div class="alert alert-danger" role="alert">
        No hay opiniones que mostrar
      </div>
    </div>
    <div class="container" v-else>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item" v-for="(opinion, index) in opiniones"
        :key="index">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="'#collapse'+index"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Opinión Creada por:{{ opinion.nombre }}. Para el Juego:
                {{ opinion.nomJuego }}
            </button>
          </h2>
          <div
            :id="'collapse'+index"
            class="accordion-collapse collapse "
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
               {{ opinion.comentario }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "component-name",
  // props: {},
  data: function () {
    return {};
  },
  computed: {
    ...mapState(["opiniones"]),
    count() {
      return this.opiniones.length;
    },
  },
  methods: {},
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>

<style scoped></style>
