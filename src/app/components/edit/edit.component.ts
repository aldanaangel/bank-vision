import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { Persona } from '../../Models/Persona';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  persona: Persona = new Persona();
  constructor( private router: Router,
               private service: ServiceService) { }

  ngOnInit(): void {
    this.editar();
  }
  editar(){
    let id = localStorage.getItem('id');
    this.service.getPersonasId(+id)
      .subscribe(data => {
        this.persona = data;
      })
  }

  actualizar(persona: Persona){
    this.service.updatePersona(persona)
    .subscribe(data =>{
      this.persona = data;
      alert('Se actualizo con exito.');
      this.router.navigate(['list']);
    })
  }

}
