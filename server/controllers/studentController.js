import db from "../config/db.js";  


export const getAllStudents = (req, res) => {
    const sql = "SELECT * FROM student";
    db.query(sql, (err, data) => {
        if (err) {
            console.error("Error fetching data:", err);
            return res.status(500).json({ error: "Database query error" });
        }
        return res.json(data);
    });
};

export const createStudent = (req, res) => {
    const sql = "INSERT INTO student (Name, Email) VALUES (?, ?)";
    const values = [req.body.name, req.body.email];

    db.query(sql, values, (err, data) => {
        if (err) {
            console.error("Error inserting data:", err);
            return res.status(500).json({ error: "Database insertion error" });
        }
        return res.status(201).json({ message: "Student added successfully", data });
    });
};

export const updateStudent = (req,res)=>{
    const sql = "update student set Name=?, Email=? where id=?";
    const values=[req.body.name,req.body.email];
    const id=req.params.id;
    
    db.query(sql,[...values,id],(err,data)=>{
        if(err){ 
            console.error("Error updating data:",err);;
        return res.status(500).json({error:"Database update error "});
        } else{
            return res.status(200).json({meaasge:'Students updated successfully',data})
        }
        

    })
}

export const deleteStudent=(req,res)=>{
    const sql= "DELETE FROM STUDENT WHERE ID=?";
    const id = req.params.id;

    db.query(sql,[id],(err,data)=>{
        if(err){
            console.log("Error deleting student:",err)
            return res.status(500).json({error:"Database deletion error"})
        }else{
            console.log(res.data);
            return res.status(200).json({message:"Student deleted Sucessfully "})
        }
    })
}
