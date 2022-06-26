import React , { useState }from "react";

function ConfirmEvent(props){
    const [isConfirmed, setIsConfirmed] =useState(false);

    const handleConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    }
    return (
                  <button
            onClick={handleConfirm}
            disabled={isConfirmed}
          >
            {isConfirmed ? "확인됨" : "확인하기"}
          </button>
    );
}


// class ConfirmEvent extends React.Component{
//     constructor(props){
//         super(props);
        
//         this.state = {
//             isConfirmed : false,
//         };
//         // this.handleConfirm = this.handleConfirm.bind(this);

//     }
//     // handleConfirm(){
//     //     this.setState((preState) =>({
//     //         isConfirmed : !preState.isConfirmed,
//     // //     }));
//     // }
//     handleConfirm = () =>{
//         this.setState((preState) =>({
//             isConfirmed : !preState.isConfirmed,
//         }));
//     }
//     render(){
//         return (
//           <button
//             onClick={this.handleConfirm}
//             disabled={this.state.isConfirmed}
//           >
//             {this.state.isConfirmed ? "확인됨" : "확인하기"}
//           </button>
//         );
//     }
// }

export default ConfirmEvent;