import { Schema, model } from "mongoose";
import { setUpdateSetting } from "./hooks.js";
const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);
contactSchema.post("save", (error, data, next) => {
  error.status = 400;
  next();
});
const Contact = model("contact", contactSchema);
contactSchema.pre("findOneAndUpdate", setUpdateSetting);
export default Contact;
