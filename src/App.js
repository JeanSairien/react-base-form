import React from 'react';
import ReactDOM from 'react-dom';
import Client from "./Client";
import Form from "./Form";
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  
  // clientInput =  React.createRef(); // assigne un element html a une reference
  
  state = {
    clients: [
      {id: 1, nom: "MameneTof"},
      {id: 2, nom: "MameneDAv"},
      {id: 3, nom: "MameneJu"},
    ],
      
      
  };


  // handleClick = () => { // gestion d'un bouton 
  //   // const clients = this.state.clients.slice(); // copie du tableau initial
  //   // clients.push({id: 4, nom: "MameneAnne"});  // ajout d'un item
  //   // this.setState({compteur: this.state.compteur + 1}); //incrémentation du compteurs: 0
  //   // this.setState({ clients: clients}) // mise a jour graphique 
  //   // console.log(this.state);
  // }

  handleAdd = client => {
    const clients = [...this.state.clients];
    clients.push(client);

    this.setState({clients});
  }

  

  delClient = id => { // fonction de suppression
    console.log(id);
    const clients = [...this.state.clients]; // copie du tableau
    const index = clients.findIndex(function(client){ // findIndex des clients dans le tableaux
      return client.id === id // comparaison de l'id 
    });

    clients.splice(index, 1); // suppression
    this.setState({clients}); // mise a jour graphique 

  };

  render(){
    const title = "liste des Clients";
        
    return(
      <div>
        <h1>{title}</h1>
              <ul>
                {this.state.clients.map(client => (
                  <Client details={client} onDelete={this.delClient}/>
                
                ))}
              </ul>
               <Form onClientAdd={this.handleAdd}/> 


      </div>



    )
}
    



}

export default App;


{/*{this.state.clients.map(client => (
                <li>
                  {client.nom}{" "} 
                  <button onClick={() => this.delClient(client.id)}>X</button>
                </li>*/}