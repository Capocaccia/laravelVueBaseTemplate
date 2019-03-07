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
      fetch('/sayHi')
              .then((rsp) => {
                rsp.json()
                        .then((rsp) => {
                          this.dataFromWeb = rsp.message
                        })
              })
    },
    getFromController: function () {
      fetch('/sayHiFromController')
              .then((rsp) => {
                rsp.json()
                        .then((rsp) => {
                          this.dataFromController = rsp.message
                        })
              })
    }
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
