import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bank-vision';

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }
  
  listarPersonas(){
    this.router.navigate(['list']);
  }
  
  registrarPersonas(){
    this.router.navigate(['add']);
  }

}
