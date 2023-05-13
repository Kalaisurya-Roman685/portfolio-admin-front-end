import { combineReducers } from "redux";
import Profile_Reducer from "./profilereducer/Profilereducer";
import Project_Reducer from "./projectreducer/ProjectReducer";
import Skill_Reducer from "./skillreducer/Skillreducer";


const RootReducer=combineReducers({
    users:Profile_Reducer,
    projects:Project_Reducer,
    skill:Skill_Reducer
});


export default RootReducer;