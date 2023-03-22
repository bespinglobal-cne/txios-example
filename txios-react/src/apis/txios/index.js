import Txios from "@msa-makers/txios";

const txios = Txios.create({
  runnerUrl: "http://localhost:3000/runner/routeRequest", // Check CORS proxy (@see SetupProxy.js)
  notifierUrl: "wss://notifier.msamaker.bespinglobal.com/txresult",
});
export default txios;
