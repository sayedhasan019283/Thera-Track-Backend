import { model, Schema } from "mongoose";
import { TPatient } from "./patient.interface";

// Mongoose Schema
const patientSchema: Schema = new Schema<TPatient>(
  {
    clientId: {
      type: Schema.Types.ObjectId, // MongoDB ObjectId type
      ref: "Client", // Reference to the Client model
      required: true,
    },
    areaOfConcern: {
      type: [String], // Array of strings
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    points: {
      type: [String], // Array of strings
      required: true,
    },
    image: {
      type: String, // URL or path to uploaded image
      required: false,
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt fields
);

// Mongoose Model
export const PatientModel = model<TPatient>("Patient", patientSchema);