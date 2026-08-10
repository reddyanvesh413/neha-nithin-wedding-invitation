import express from "express";
import { createServer as createViteServer } from "vite";

const app = express();

const PORT = 3000;

app.use(express.json());

// API endpoint
app.get("/api/hello", (req, res) => {
  res.json({
    message: "Hello from the local Express server!"
  });
});

// Vite development server
const vite = await createViteServer({
  server: {
    middlewareMode: true
  },
  appType: "spa"
});

app.use(vite.middlewares);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});