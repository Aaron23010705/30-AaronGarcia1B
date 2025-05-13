const employeeController = {};

import Employee from "../models/Employees.js";

employeeController.getEmployee = async (req,res) => {

    const employees = await Employee.find();
    res.json(employees)
   
}

employeeController.updateEmployee = async (req,res) => {
    const {name, email, password, telephone, adress, position, hire_date, salary, active} = req.body;
     const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id,{name, email, password, telephone, adress, position, hire_date, salary, active},{new:true})
     res.json ({message: "employee updated"});

}

employeeController.deleteEmployee = async (req,res) => {

    await Employee.findByIdAndDelete(req.params.id);
    res.json ({message: "employee deleted"});

}

export default employeeController;