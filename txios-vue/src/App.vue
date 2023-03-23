<template>
  <div id="app">
    <div class="wrapper">
      <button @click="onClickTxios">Request Txios</button>
    </div>
    <textarea
        id="response-area"
        placeholder="result here"
        v-model="orderResult"
    />
  </div>
</template>

<script>
import txios from "@/apis/txios";
 
export default {
  name: 'App',
  components: {},
  data() {
    return {
      orderResult: undefined
    };
  },

  methods: {
    onClickTxios(){
      // 요청 파라미터 준비
      const rtid = "rt_20230224064821";
      const order = {
        service_name: "order",
        payload: {
          Combine: {
            index: 1,
          },
        },
      };

      // txios요청
      txios
        .start(rtid, order) // request
        .then((txResponse) => {
          this.orderResult = JSON.stringify(txResponse, null, 2); // response
        }) 
        .catch(txError => console.log(txError)); // exception
    }
  },
   
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#response-area {
  min-height: 470px;
  min-width: 350px;
  width: 45vh;
}
</style>
