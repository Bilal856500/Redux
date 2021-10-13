import React, { useEffect } from "react";
import { connect } from 'react-redux';
import {fetchUsers} from "./actions";

function UserContainer({fetchUsers,userData}) {
    useEffect(() => {
        fetchUsers()
    },[fetchUsers]);
    return (
        <div>
            {userData.error ? (<h1>{userData.error}</h1>) :
                <div><h1>Users</h1>
                    <div>{userData && userData && userData.map(users => <p>{users.name}</p>)}</div></div>
            }
        </div>
    )
}
const mapStateToProps = (state)=>{
    return{
    userData:state.user
    }

}

const mapDispatchToProps = (dispatch)=>{
    return{
        fetchUsers:()=>dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserContainer);