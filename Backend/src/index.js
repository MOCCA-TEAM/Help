var express = require('express');
var routes = require("./routes");
const { request, response } = require('express');
const cors = require('cors')

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Rota / Recurso
 */

 /**
  * METODOS HTTP:
  * GET: buscar informação backend
  * POST: criar informação backend
  * PUT: alterar informação backend
  * DELETE: deletar informação backend
  */

