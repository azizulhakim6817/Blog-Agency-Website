import app from "./app.js";
import { PROT } from "./app/config/config.js";

//const PROT = process.env.PROT || 3000;

//! Router Error handler..........
app.use((req, res, next) => {
  res.send("Not Found!");
});

//! Server Error handler.................
app.use((err, req, res, next) => {
  res.send("Server is not  Found!");
});

app.listen(PROT, () => {
  console.log(`Server is running at http://localhost:${PROT}`);
});
