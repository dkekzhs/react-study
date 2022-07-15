import React from "react";
import Notification from "./Notification";

const resercedNotification =[
    {   
        id : 1,
        message : "ㅎㅇ",
    },
    {
        id : 2,
        message : "ㅎㅇ",
    },
    {
        id : 3,
        message : "ㅎㅇ",
    },
]
class NotificationList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            notifications : [],
        };
    }
    componentDidMount(){
        const {notifications} = this.state;
         let timer = setInterval(()=>{
            if(notifications.length < resercedNotification.length){
                const index = notifications.length;
                notifications.push(resercedNotification[index]);   
                this.setState({
                    notifications : notifications,
                });
            }
            else{
                clearInterval(timer);
            }

        },1000);
    }
    
    render(){
        return (
            <div>
                {this.state.notifications.map(notifications =>{
                    return <Notification 
                    key={notifications.id}
                    id={notifications.id}
                    message = {notifications.message}
                    
                    />
                })}
            </div>
        );
    }
}
export default NotificationList;