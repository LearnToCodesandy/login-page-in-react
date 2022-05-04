const ls = localStorage;

// check if localstorage is empty!
function checkLocalStorage(storageName){
    const stg = ls.getItem(storageName);
    if(stg){
        return true;
    }else{
        return false;
    }
}

function checkDuplicate(list,item){
    const temp = list.filter(listItem=>item.username === listItem.username)
    if(temp.length !== 0){
        return true;
    }else{
        return false;
    }
}

// add new user
function addUser(storageName,user){
    if(checkLocalStorage(storageName)){
        const existingUsers = JSON.parse(ls.getItem('users'));
        if(checkDuplicate(existingUsers,user)){
            return false;
        }else{
            const latestUsers = [user,...existingUsers];
            ls.setItem(storageName,JSON.stringify(latestUsers));
            return true;
        }    
    }else{
        ls.setItem('users',JSON.stringify([user]));
        return true;
    }
}

// check if the user is valid to login
function checkUserLoginValidity(storageName,user){
   if(checkLocalStorage(storageName)){
    const users = JSON.parse(ls.getItem(storageName));
    const requiredUser = users.filter((userItem)=>{if(userItem.username === user.username && userItem.password === user.password){
        return userItem;
    }})
    if(requiredUser.length !== 0){
        return true;
    }else{
        return false;
    }
   }else{
       return false;
   }
}


export {addUser};
export {checkUserLoginValidity};