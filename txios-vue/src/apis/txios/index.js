import Txios from "@msa-makers/txios";

const txios = Txios.create({
  runnerUrl: "http://localhost:3001/runner/routeRequest", // Check CORS proxy (@see vue.config.js)
  notifierUrl: "wss://dev-notifier.msamaker.bespinglobal.com/txresult",
});
export default txios;
