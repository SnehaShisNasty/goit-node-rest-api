import {
  getAll,
  get,
  create,
  update,
  deleteCon,
} from "../services/contactsServices.js";

import ctrlWrapper from "../decorators/ctrlWrapper.js";
import HttpError from "../helpers/HttpError.js";
const getAllContacts = async (req, res) => {
  const result = await getAll();

  res.json(result);
};

const getOneContact = async (req, res) => {
  const { id } = req.params;
  const result = await get(id);
  if (!result) {
    throw HttpError(404, `Contact with id=${id} not found`);
  }

  res.json(result);
};

const deleteContact = async (req, res) => {
  const { id } = req.params;
  const result = await deleteCon(id);
  if (!result) {
    throw HttpError(404, `Contact with id=${id} not found`);
  }

  res.json(result);
};

const createContact = async (req, res) => {
  const result = await create(req.body);

  res.status(201).json(result);
};

const updateContact = async (req, res) => {
  const { id } = req.params;
  const result = await update(id, req.body);
  if (result === undefined) {
    throw HttpError(400, `Body must have at least one field`);
  }
  if (!result) {
    throw HttpError(400, `Contact with id=${id} not found`);
  }

  res.json(result || { message: "Delete success" });
};
export default {
  getAllContacts: ctrlWrapper(getAllContacts),
  getOneContact: ctrlWrapper(getOneContact),
  createContact: ctrlWrapper(createContact),
  updateContact: ctrlWrapper(updateContact),
  deleteContact: ctrlWrapper(deleteContact),
};
