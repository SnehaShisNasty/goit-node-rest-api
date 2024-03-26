import Contact from "../models/Contact.js";

export const getAll = () => Contact.find();
export const create = (data) => Contact.create(data);

export const get = async (id) => {
  const result = await Contact.findById({ _id: id });

  return result;
};
export const update = (id, data) =>
  Contact.findByIdAndUpdate(id, data, { new: true, runValidators: true });

export const deleteCon = (id) => Contact.findByIdAndDelete(id);
export const updateStatus = (id, body) =>
  Contact.findByIdAndUpdate(id, body, { new: true, runValidators: true });
