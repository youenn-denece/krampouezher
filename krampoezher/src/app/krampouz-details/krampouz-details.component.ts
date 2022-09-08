import { Component, OnInit } from '@angular/core';
import { Krampouz } from '../interfaces/krampouz.interface';

@Component({
  selector: 'app-krampouz-details',
  templateUrl: './krampouz-details.component.html',
  styleUrls: ['./krampouz-details.component.scss']
})
export class KrampouzDetailsComponent implements OnInit {
  krampouz: Krampouz = {
      name : 'Complète',
      img:'https://www.truffissima.com/wp-content/uploads/2020/02/cre%CC%82pe-comple%CC%80te-a%CC%80-la-Truffe-scaled.jpg',
      description: 'L\'incontournable, la plus emblématique des crèpes. Un oeuf fermier, du jambon artisanal et de l\'emmental fermier. Il ne lui manque qu\'un tour de moulin à poivre et une pincée de sel. Rien de plus, rien de moins ! SU-CCU-LENT',
    };

  constructor() { }

  ngOnInit(): void {
  }

}
