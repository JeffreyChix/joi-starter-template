import { Router, Request, Response } from "express";

const router = Router();

router.get("/api/v1", (req: Request, res: Response) => {
  res.send("Hello Dev Community!");
});

//? Import other routes here

//* eg: router.use("/api/v1/auth", authRoutes);
//* eg: router.use("/api/v1/user", userRoutes);

export default router;
