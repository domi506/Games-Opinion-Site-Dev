<template>
  <div class="home">
    <div class="container">
      <div class="row py-5 games">
        <div
          class="col-12 col-sm-3 mb-4 game"
          v-for="(game, id) in games"
          :key="id"
        >
          <div class="card" style="width: 13rem">
            <img :src="game.background_image" class="card-img-top" alt="" />
            <div class="card-body">
              <h5 class="card-title">{{ game.name }}</h5>
              <p class="card-text">
                Puntaje:
                {{ game.rating }}
              </p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Liberado:{{ game.released }}</li>
              <li class="list-group-item">Actualizado:{{ game.updated }}</li>
            </ul>
            <div class="card-body">
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                :data-bs-target="'#exampleModal' + game.id"
              >
                Opinar
              </button>

              <!-- Modal -->
              <div
                class="modal fade"
                :id="'exampleModal' + game.id"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Escribe tu opinión para el juego: {{ game.name }}
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <form action="">
                        <div class="mb-3">
                          <label class="form-label">Nombre</label>
                          <input
                            type="text"
                            class="form-control"
                            v-model="nombre"
                          />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">Comentario</label>
                          <textarea
                            class="form-control"
                            v-model="comentario"
                            cols="30"
                            rows="10"
                          >
                          </textarea>
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Cerrar
                      </button>
                      <button
                        type="button"
                        class="btn btn-primary"
                        @click="add(game)"
                        data-bs-dismiss="modal"
                      >
                        Guardar
                      </button>
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

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Home",
  components: {
   
  },
  computed: {
    ...mapState(["games"]),
  },

  data() {
    return {
      nombre: "",
      comentario: "",
    };
  },
  methods: {
    ...mapActions(["addOpinion"]),

    add(game) {
      let opinion = {
        /* id: game.id, */
        nomJuego: game.name,
        nombre: this.nombre,
        comentario: this.comentario,
      };
      this.addOpinion(opinion);
      this.clear()
    },
    clear() {
      this.nombre = "";
      this.comentario = "";
    },
  },
};
</script>
<style scoped>
img {
  height: 150px;
}
</style>
