import { Component, OnInit } from '@angular/core';
import { Krampouz } from '../interfaces/krampouz.interface';

@Component({
  selector: 'app-krampouz-list',
  templateUrl: './krampouz-list.component.html',
  styleUrls: ['./krampouz-list.component.scss']
})
export class KrampouzListComponent implements OnInit {
  krampouzs: Krampouz[] = [
    {
      name : 'Complète',
      img:'https://www.truffissima.com/wp-content/uploads/2020/02/cre%CC%82pe-comple%CC%80te-a%CC%80-la-Truffe-scaled.jpg',
      description: 'L\'incontournable, la plus emblématique des crèpes. Un oeuf fermier, du jambon artisanal et de l\'emmental fermier. Il ne lui manque qu\'un tour de moulin à poivre et une pincée de sel. Rien de plus, rien de moins ! SU-CCU-LENT',
    },
    {
      name : 'Galette saucisse',
      img:'https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Ffac.2F2018.2F11.2F02.2Fa8ef3508-e08b-4970-8b1c-9e8c8a15376f.2Ejpeg/400x400/quality/80/crop-from/center/galette-saucisse.jpeg',
      description: 'L\'incontournable, la plus emblématique des crèpes. Un oeuf fermier, du jambon artisanal et de l\'emmental fermier. Il ne lui manque qu\'un tour de moulin à poivre et une pincée de sel. Rien de plus, rien de moins ! SU-CCU-LENT',
    },
    {
      name : 'LA beurre sucre',
      img:'https://www.cuisineactuelle.fr/imgre/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcac.2F2018.2F09.2F25.2F9e7d56fc-f05f-4b62-b042-0dd0037f9358.2Ejpeg/400x400/quality/80/crop-from/center/crepes-beurre-sucre.jpeg',
      description: 'L\'incontournable, la plus emblématique des crèpes. Un oeuf fermier, du jambon artisanal et de l\'emmental fermier. Il ne lui manque qu\'un tour de moulin à poivre et une pincée de sel. Rien de plus, rien de moins ! SU-CCU-LENT',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
