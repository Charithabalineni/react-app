import  React,{Component} from 'react';

import errImg from "../assets/images/err.jpg";


class Error extends Component{
    render(){
        return(
            <div>
                <img src={errImg} class="err-img" />
            </div>
        );
    }
}
export default Error;