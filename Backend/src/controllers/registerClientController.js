import Client from "../models/Clients.js";
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import { config } from "../config.js";

const registerClientsController = {};

registerClientsController.register = async (req, res) => {
  const {
    name, email, password, telephone, adress, active
  } = req.body;

  try {
    const existClient = await Client.findOne({ email });
    if (existClient) {
      return res.json({ message: "Client already exists" });
    }

    const passwordHash = await bcryptjs.hash(password, 10);

    const newClient = new Client({
      name, email, password:passwordHash, telephone, adress, active
    });

    await newClient.save();

    jsonwebtoken.sign(
      { id: newEmployee._id },
      config.JWT.secret,
      { expiresIn: config.JWT.expiresIN },
      (error, token) => {
        if (error) console.log(error);
        res.cookie("authToken", token);
        res.json({ message: "Cliente registrado" });
      }
    );
  } catch (error) {
    console.log(error);
    res.json({ message: "Error al registrar al cliente" });
  }
};

export default registerClientsController;
