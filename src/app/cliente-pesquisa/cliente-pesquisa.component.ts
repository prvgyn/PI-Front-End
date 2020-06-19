import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-pesquisa',
  templateUrl: './cliente-pesquisa.component.html',
  styleUrls: ['./cliente-pesquisa.component.css']
})
export class ClientePesquisaComponent implements OnInit {

  tipos = [
    { label: 'Físico', value: '1'},
    { label: 'Jurídico', value: '2'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
