import React, {Component} from "react";

class Client extends Component{
	 render() {
	 	
	 	const {details, onDelete} = this.props;
	 	
	 	return (
			<li>
	          {details.nom}{" "} 
	          <button onClick={() => this.props.onDelete(details.id)}>X</button>
	   	    </li>
	   	    );
		}
	}	

export default Client;