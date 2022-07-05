<template>
  <div class="container">

    <div class="row">
      <h1>Editando tu opinión de {{nomJuego }}</h1>
      <form>
        <div class="text-star mb-3">
          <label class="form-label">Nombre</label>
          <input type="text" class="form-control" v-model="nombre" />
        </div>
        <div class="mb-3">
          <label class="form-label">Comentario:</label>
          <input type="text" class="form-control" v-model="comentario" />
        </div>
        <button type="submit" class="btn btn-success" @click="regreso">
          Regresar</button
        ><Span>&nbsp;&nbsp;</Span>
        <button type="submit" class="btn btn-primary" @click.prevent="edit(index)">
          Guardar
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions} from "vuex";
export default {
  name: "component-name",
  props: ["index"],
  data: function () {
    return {
      nomJuego:"",
      nombre:"",
      comentario:"",
    };
  },
  computed: {
    ...mapState(["opiniones"]),
    count() {
      return this.opiniones.length;
    },
  },
  methods: {
    ...mapActions(["editOpinion"]),
    regreso() {
      this.$router.push(`/Admin`);
    },
    setFormData(){
      let opinion =this.opiniones[this.index]
      console.log(opinion)
      this.nombre=opinion.nombre
      this.comentario=opinion.comentario
      this.nomJuego=opinion.nomJuego
    },
    edit(index){
      let editOp= {
        index:index,
        nombre:this.nombre,
        comentario:this.comentario,
        nomJuego:this.nomJuego,

      }
      this.editOpinion(editOp)
      this.$router.push("/Admin")
    }
  },
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  created() {
    this.setFormData()
  },
  // -- End Lifecycle Methods
};
</script>

<style scoped></style>
