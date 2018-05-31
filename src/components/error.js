import  React,{Component} from 'react';

let errImg ="https://www.navthemes.com/wp-content/uploads/2017/08/404-error-page-not-found-in-wordpress.jpg";


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