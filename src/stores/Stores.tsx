import React from "react";

function LocalStore(action, Key, Value?) {
    if (action == "set"){
        console.log(action, Key)
    }
    if(action == "get"){
        console.log(action,Value)
    }

}

export default LocalStore;