import { z } from "zod";
import mongoose from "mongoose";

// Zod Validation Helper
const objectIdValidator = z
  .string()
  .refine((val) => mongoose.Types.ObjectId.isValid(val), {
    message: "Invalid MongoDB ObjectId",
  });

// Zod Schemas
const createPatientSchema = z.object({
  body : z.object({
    clientId: objectIdValidator, // MongoDB ObjectId for the associated client
  areaOfConcern: z
    .array(z.string())
    .nonempty("Area of concern must have at least one value"), // Non-empty array of strings
  description: z.string().min(1, "Description is required"), // Non-empty string
  points: z
    .array(z.string())
    .nonempty("Points must have at least one value"), // Non-empty array of strings
  image: z.string().optional(), // Optional string for image URL or path
  })
});

const updatePatientSchema = z.object({
  body : z.object({
    clientId: objectIdValidator.optional(), // Optional MongoDB ObjectId
  areaOfConcern: z.array(z.string()).optional(), // Optional array of strings
  description: z.string().optional(), // Optional string
  points: z.array(z.string()).optional(), // Optional array of strings
  image: z.string().optional(), // Optional string for image URL or path
  })
});

// Export Validation Schemas
export const patientValidation = {
  createPatientSchema,
  updatePatientSchema,
};