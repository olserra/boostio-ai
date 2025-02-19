import { prisma } from "../../prisma/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      console.log("req.body", req.body);
      const { name, email, company, employees } = req.body;

      const formSubmission = await prisma.formSubmission.create({
        data: {
          name,
          email,
          company,
          employees,
        },
      });

      res
        .status(200)
        .json({ message: "Lead data stored successfully", formSubmission });
    } catch (error) {
      console.error("Error storing lead data:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
