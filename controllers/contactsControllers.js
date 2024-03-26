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

  res.json(result);
};
const updateStatusContact = async (req, res) => {
  const { id } = req.params;

  const result = await update(id, req.body);

  res.json(result);
};
export default {
  getAllContacts: ctrlWrapper(getAllContacts),
  getOneContact: ctrlWrapper(getOneContact),
  createContact: ctrlWrapper(createContact),
  updateContact: ctrlWrapper(updateContact),
  deleteContact: ctrlWrapper(deleteContact),
  updateStatusContact: ctrlWrapper(updateStatusContact),
};
