import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { Persona } from '../../Models/Persona';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  per: Persona = new Persona();
  constructor( private router: Router,
               private service: ServiceService) { }

  ngOnInit(): void {
  }

  guardar(nombre: string, apellidos: string, celular: number){    
    this.per.nombre = nombre;
    this.per.apellido = apellidos;
    this.per.celular = celular;
    this.service.createPersona(this.per)
    .subscribe(data=>{
      alert('Se agrego con Exito...');
      this.router.navigate(['list']);
    });
  }
  }


