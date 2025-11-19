import "../../../../infra/database.js";
import database from "../../../../infra/database.js";

async function status(request, response) {
  await database.query("SELECT 1 + 1 as sum;");
  response.status(200).json({ status: "ok" });
}

export default status;
