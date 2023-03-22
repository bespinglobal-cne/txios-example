<template>
  <main>
    <div id="app2">
      <div class="wrapper">
        <button @click="onClickTxios">Request Txios</button>
      </div>
      <textarea
        id="response-area"
        placeholder="result here"
        v-model="prettyTransactionResult"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { TxiosError } from "@msa-makers/txios";
import txios from "@/apis/txios";
import type { Order, OrderResult } from "./apis/txios/types";

const prettyTransactionResult = ref<string | undefined>(undefined);
const onClickTxios = () => {
  // 요청 파라미터 준비
  const rtid = "rt_20230224064821";
  const order: Order = {
    service_name: "order",
    payload: {
      Combine: {
        index: 1,
      },
    },
  };

  // txios요청
  txios
    .start<Order, OrderResult>(rtid, order) // request
    .then((txResponse) => {
      prettyTransactionResult.value = JSON.stringify(txResponse, null, 2); // response
    })
    .catch((txError: TxiosError) => console.log(txError)); // exception
};
</script>

<style scoped>
#response-area {
  min-height: 450px;
  min-width: 350px;
  width: 45vh;
}
</style>
