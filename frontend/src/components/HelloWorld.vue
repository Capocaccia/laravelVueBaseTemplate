<template>
  <div class="hello">
    <div class="web">
      <button class="hiFromWeb" @click="getFromWeb">
        Get Data From Web
      </button>
      {{ dataFromWeb }}
    </div>
    <div class="web">
      <button class="hiFromWeb" @click="getFromController">
        Get Data From Controller
      </button>
      {{ dataFromController }}
    </div>
  </div>
</template>

<script>
  import routes from '../../routes.js'

export default {
  name: 'HelloWorld',
  data() {
    return {
      dataFromWeb: null,
      dataFromController: null
    }
  },
  methods: {
    getFromWeb: function () {
      routes.getData.fromWeb()
        .then((rsp) => {
          this.dataFromWeb = rsp.data.message
        })
    },
    getFromController: function () {
      routes.getData.dataFromController()
        .then((rsp) => {
          this.dataFromController = rsp.data.message
        })
    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
