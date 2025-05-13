const clientsController = {};

import Clients from "../models/Clients.js";

clientsController.getClients = async (req,res) => {

    const clients = await Clients.find();
    res.json(clients)
   
}

clientsController.updateClients = async (req,res) => {
    const {name, email, password, telephone, adress, active} = req.body;
     const updateClient = await Clients.findByIdAndUpdate(req.params.id,{name, email, password, telephone, adress, active},{new:true})
     res.json ({message: "client updated"});

}

clientsController.deleteClients = async (req,res) => {

    await Clients.findByIdAndDelete(req.params.id);
    res.json ({message: "client deleted"});

}

export default clientsController;