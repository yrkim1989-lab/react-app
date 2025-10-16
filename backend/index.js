const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// JSON 요청 처리
app.use(express.json());

// 라우터 연결
const userRouter = require("./controllers/userController");
app.use("/users", userRouter);

// 기본 라우트
app.get("/", (req, res) => {
  res.send("Hello from backend!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
