import {
  getAll,
  get,
  create,
  update,
  deleteCon,
} from "../services/contactsServices.js";
import {
  createContactSchema,
  updateContactSchema,
} from "../schemas/contactsSchemas.js";
import HttpError from "../helpers/HttpError.js";
export const getAllContacts = async (req, res) => {
  try {
    const result = await getAll();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

// export const getOneContact = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const result = await get(id);
//     if (!result) {
//       throw HttpError(404, `Movie with id=${id} not found`);
//     }
//     res.json(result);
//   } catch (error) {
//     next(error);
//   }
// };

// export const deleteContact = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const result = await deleteCon(id);
//     if (!result) {
//       throw HttpError(404, `Movie with id=${id} not found`);
//     }
//     res.json({
//       message: "Delete success",
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// export const createContact = async (req, res) => {
//   try {
//     const { error } = createContactSchema.validate(req.body);
//     if (error) {
//       throw HttpError(400, error.message);
//     }
//     const result = await create(req.body);
//     res.status(201).json(result);
//   } catch (error) {
//     next(error);
//   }
// };

// export const updateContact = async (req, res) => {
//   try {
//     const { error } = updateContactSchema.validate(req.body);
//     if (error) {
//       throw HttpError(400, error.message);
//     }
//     const { id } = req.params;
//     const result = await update(id, req.body);
//     if (!result) {
//       throw HttpError(404, `Movie with id=${id} not found`);
//     }
//     res.json(result);
//   } catch (error) {
//     next(error);
//   }
// };
