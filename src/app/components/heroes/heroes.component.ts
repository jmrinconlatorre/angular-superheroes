import { Component, OnInit } from '@angular/core';
import { HeroesService} from './../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  private heroes:any[] = [];

  constructor(private _heroesService: HeroesService) { }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }

}
