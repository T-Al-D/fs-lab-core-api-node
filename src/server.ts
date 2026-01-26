import "dotenv/config"; // SET ENV : process.env.SERVICE_NAME
import { app } from "./app";

// define entry port
const PORT = process.env.PORT || 3000;

// opening of TCP port in event loop
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
