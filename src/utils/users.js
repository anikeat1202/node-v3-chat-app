const users = []

// addUser , removeUser ,getUser , getUsersInRoom
const addUser = ({id , username, room})=>{
    // clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()
    
    // validate the data

    if(!username || !room){

        return {
      
            error :"Username and room are required"

        }

    }
         // check for existing users

    const existingUser = users.find((user)=>{

            return user.room==room && user.username == username
    })     

    // validate username

    if(existingUser){

     return {

        error :"Username is already in use"
     }


    }

    // store user

    const user= {id,username,room}
    users.push(user)

    return {
        user
    }



}


const removeUser =(id)=>{

    if(!id){
return {
    error:"Id Is Required"
      }
    }

const index = users.findIndex((user)=>{
    return user.id== id
})

if(index !=-1)
{
return users.splice(index,1)[0]
}

}

    const getUser=(id)=>{

        const user = users.find((user)=>{

         return  user.id==id

        })        
        return user
        

    }    




  const getUsersInRoom = (room)=>{

    room = room.trim().toLowerCase()

    const usersInRoom= users.filter((user)=>{
              
             return user.room==room

    })        

        return usersInRoom


  }

  module.exports={
addUser,
removeUser,
getUser,
getUsersInRoom




  }