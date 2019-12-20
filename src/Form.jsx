import React, {Component} from "react";


class Form extends Component{
 	
 	state = {
 		newClient: ''
 	}
 	
 	handleChange = (event) => { // fonction de detection des changement dans l'input
		 // const value = event.currentTarget.value;//detections de la valeur de l'input
	this.setState({newClient: event.currentTarget.value}); // remplacement du status par la nouvelle valeurs
	console.log(event.currentTarget.value);
	}

  	handleSubmit = (event) => { // fonction de gestion des evenements (form)
 		event.preventDefault(); // on evite le rechargement   
 		const id = new Date().getTime();
 		const nom = this.state.newClient;

 		this.props.onClientAdd({id, nom});

 		this.setState({newClient: ''})
 
 

};
 	
 	render() {
	 	

	 	 	
	 	return (
			  <form onSubmit={this.handleSubmit}>
                <input
                 value={this.state.newClient} 
                 onChange={this.handleChange} 
                 type="text" 
                 placeholder="Ajouter un client"
                 />
                <button >Confirmer</button>
              </form>          
	   	    );
		}
	}	

export default Form;         


