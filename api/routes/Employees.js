const Employee = require('../../database/models/Employee');

module.exports = router => {
    //Get all employees route
    router.get('/getEmployees', (req, res) => {
        Employee.getAllEmployees((error, employees) => {
            if(error){
                res.status(400).json({success: false, message: error});
            } else {
                res.status(200).json({success: true, employees: employees});
            }
        })
    });

    //Add new employee route
    router.post('/addEmployee', (req, res) => {
        const employee = {
            name: req.body.name,
            location: req.body.location
        }
    
    Employee.addEmployee(employee, (data, error) => {
        if(error){
            res.status(400).json({success: false, message: error})
        } else if(data){
            res.status(200).json({success: true, message: `Employee added: ${data.insertId}`});
        }
    })
})

    //Find employee by id route
    router.get('/getEmployee/:id', (req, res) => {
        let id = req.params.id;

        Employee.findEmployeeById(id, (employee, error) => {
            if(error){
                res.json({success: false, message: error});
            } else if(employee){
                res.json({success: true, person: employee})
            }
        })
    });
}

