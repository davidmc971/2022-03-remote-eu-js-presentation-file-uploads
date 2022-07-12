import express, { Router } from "express";
import cors from "cors";
import multer from "multer";

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

const multerRouter = Router();

// No options passed to multer() means store file in memory
const uploadHandler = multer();

multerRouter.post("/", uploadHandler.single("file"), (req, res) => {
    console.log(req.file);
    res.json({
        filename: req.file?.originalname,
        size: req.file?.size
    });
})

app.use("/multer", multerRouter);

app.listen(8000, () => {
  console.log("Application running on http://localhost:8000");
});