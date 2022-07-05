<template>
  <div>
    <h1>Administrando la Lista de Opiniones</h1>
    <div class="container" v-if="count == 0">
      <div class="alert alert-danger" role="alert">No hay opiniones que administrar</div>
    </div>
    <div class="container" v-else>
      <div class="row">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Persona</th>
              <th scope="col">Juego</th>
              <th scope="col">Opinión</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(opinion, index) in opiniones" :key="index">
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ opinion.nombre }}</td>
              <td>{{ opinion.nomJuego }}</td>
              <td>{{ opinion.comentario }}</td>
              <td>
                <button
                  type="button"
                  class="btn btn-danger"
                  @click="confirmEliminar(index)"
                >
                  Eliminar
                </button>
                <Span>&nbsp;&nbsp;</Span>
                <button
                  type="button"
                  class="btn btn-info"
                  @click="editando(index)"
                >
                  Editar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
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
  methods: {
    ...mapActions(["removeOpinion"]),

    eliminado(index) {
      this.removeOpinion(index);
    },
    editando(index) {
      this.$router.push(`/Edit/${index}`);
    },
    confirmEliminar(index){
      let response = confirm ("¿Estas seguro de querer eliminar la opinión?")
      if (response == true){
        this.eliminado(index)
      }
    }
  },
  // watch: {},
  components: {
   
  },
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>

<style scoped></style>
