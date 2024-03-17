import fs from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";

const contactsPath = path.resolve("db", "contacts.json");
export const getAll = async () => {
  const data = await fs.readFile(contactsPath);

  return JSON.parse(data);
};
export const get = async (id) => {
  const data = await getAll();
  const result = data.find((item) => item.id === id);

  return result || null;
};
export const create = async (data) => {
  const contacts = await getAll();
  const newContact = {
    id: nanoid(),
    ...data,
  };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
};

export const update = async (id, data) => {
  const contacts = await getAll();
  const index = contacts.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }
  contacts[index] = { ...contacts[index], ...data };
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

  return contacts[index];
};
export const deleteCon = async (id) => {
  const contacts = await getAll();
  const index = contacts.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }

  const [result] = contacts.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return result;
};
