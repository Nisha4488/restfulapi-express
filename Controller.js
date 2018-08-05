
const users = [{
  id:1,
  name: 'Dilip',
  email: 'dilip.kumar2k6@gmail.com',
  age: 35
},
{
  id:2,
  name: 'Nisha',
  email: 'me.nisha.bharti@gmail.com',
  age: 30
}
];
const findOneAndUpdate=(user)=>{
  var index = -1;

  for(let i=0;i<users.length;i++){
  // const userId = parseInt(req.params.id);
  // const user = users.find(element => element.id === userId);
  if(users[i].id===user.id){
    index = i;
    break;
  }
}
if(index===-1){
users.push(user)
}
else{
users[index]={...users[index], ...user}
}
}
class Controller {
  static handleGetUsers(req, res) {
    res.json(users)
  }

  static handleOneUser(req,res){
    const userId = parseInt(req.params.id);
    const user = users.find(element => element.id === userId);
    res.json(user)
  }

  static handleAddUser(req,res){

    const addUser = req.body
  findOneAndUpdate(addUser)
res.json(addUser)
}

  static handleUpdateUser(req,res){

    const updateUser=req.body
    findOneAndUpdate(updateUser)
    res.json(updateUser)
  }

  static handlePartialUpdateUser(req,res){

    const handlePartialUpdateUser =req.body
    findOneAndUpdate(handlePartialUpdateUser)
    res.json(handlePartialUpdateUser)
  }

  static handleDeleteUser(req,res){
    const userId = parseInt(req.params.id);
    let user;
  for(let i=0;i<users.length;i++){
    if(users[i].id===userId){
      user=users[i]
      users.splice(i,1)
      break;
    }
  }
  res.json(user)
  }

}

module.exports = Controller;
