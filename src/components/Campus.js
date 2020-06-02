import React,{Component} from 'react';
import CampusCard from "./CampusCard"
class Campus extends Component{
    render(){
        return (
        <div className="campuses">
        <CampusCard
         name="College of Staten Island"
        imageUrl="https://via.placeholder.com/150"
        students={32}
        />
          <CampusCard
         name="Brooklyn College"
        imageUrl="https://via.placeholder.com/150"
        students={15}
        />
          <CampusCard
         name="John Jay"
        imageUrl="https://via.placeholder.com/150"
        students={12}
        />
        </div>
    )
    };
}
export default Campus;