import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  items:any[]=[
    {texto:"Item1"},
    {texto: "Item2"},
    {texto: "Item3"},
    {texto: "Item4"},
    {texto: "Item5"},
    {texto: "Item6"}
  ]
}
