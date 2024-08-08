
import obj from "./data_sample/data.json" assert { type: 'json' };
 
const login=async function(req, res) {
    const { user_id } = req.body;
    console.log("User ID",user_id);
    const user = obj['employee'].find((user_rec) => user_rec.id == user_id);

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
  
    const permission=obj['permission'].find((user) => user.employee_id == user_id);
    let Facility_allowed;  
    if(permission?.Facility){
        const facility_ids=permission.Facility.map(Number);
        permission.Facility=obj['Facility'].filter((facility) => permission.Facility.includes(Number(facility.id)));
    }

    if (!permission) {
      return res.status(200).json({ message: "Dont have permission" });
    }
    
    res.json({"permission":permission,"Facility_allowed":Facility_allowed});
}

export default login;