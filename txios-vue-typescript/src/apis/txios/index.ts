import Txios from "@msa-makers/txios";

const txios = Txios.create({
  runnerUrl: "http://localhost:3002/runner/routeRequest", // Check CORS proxy (@see vite.config.ts)
  notifierUrl: "wss://dev-notifier.msamaker.bespinglobal.com/txresult",
});
export default txios;
