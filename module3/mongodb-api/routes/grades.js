import express from "express";
import db from "../db/conn.js";
import { ObjectId } from "mongodb";

const router = express.Router();

/**
 * GET grades/
 */
router.get("/", (req, res) => {
  res.send("Hello from Grades router");
});

/**
 * GET grades/:id
 */
router.get("/:id", async (req, res) => {
  const collection = await db.collection("grades");
  const query = { _id: new ObjectId(req.params.id) };
  const result = await collection.findOne(query);

  if (!result) res.send("Not Found").status(404);
  else res.send(result).status(200);
});

/**
 * Get a student's grade data
 * GET grades/student/:id
 */
router.get("/student/:id", async (req, res) => {
  let collection = await db.collection("grades");
  let query = { student_id: Number(req.params.id) };
  let result = await collection.find(query).toArray();

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

/**
 * Get a class's grade data
 * GET /grades/class/:id
 */
router.get("/class/:id", async (req, res) => {
  let collection = await db.collection("grades");
  let query = { class_id: Number(req.params.id) };
  let result = await collection.find(query).toArray();

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

export default router;
