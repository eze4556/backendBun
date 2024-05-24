import figlet from "figlet";



const server = Bun.serve({
  port: 3001,
  fetch(req) {
     const body = figlet.textSync("Backend de tu sistema juridico legal Funcionando!");
    return new Response(body);
    return new Response("Backend de tu sistema juridico legal Funcionando!");
  },
});
console.log(`Listening on http://localhost:${server.port} ...`);
