import express from "express";
import validateBody from "../decorators/validateBody.js";
import contactsControllers from "../controllers/contactsControllers.js";
import {
  createContactSchema,
  updateContactSchema,
} from "../schemas/contactsSchemas.js";
import { isValidId } from "../middlewares/isValidId.js";
const contactsRouter = express.Router();

contactsRouter.get("/", contactsControllers.getAllContacts);

contactsRouter.get("/:id", isValidId, contactsControllers.getOneContact);

contactsRouter.delete("/:id", isValidId, contactsControllers.deleteContact);

contactsRouter.post(
  "/",
  validateBody(createContactSchema),
  contactsControllers.createContact
);

contactsRouter.put(
  "/:id",
  isValidId,
  validateBody(updateContactSchema),
  contactsControllers.updateContact
);
contactsRouter.put(
  "/:id/favorite",
  isValidId,
  validateBody(updateContactSchema),
  contactsControllers.updateStatusContact
);

export default contactsRouter;
