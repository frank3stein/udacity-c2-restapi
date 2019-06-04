import { Router, Request, Response } from "express";

const router: Router = Router();

router.post("/", async (req: Request, res: Response) => {
  const { image_url, upload_image_signedUrl } = req.params;
  if (
    typeof image_url !== "string" ||
    typeof upload_image_signedUrl !== "string"
  ) {
    res.status(422).end();
  }
  if (!req.headers.authorization) {
    res.status(401).send("Unauthorized access");
  }
  const token = req.headers.authorization.split(" ")[1];
});

export const ImageRouter: Router = router;
