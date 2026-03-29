import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { RemoveSpacesPipe } from '../remove-spaces.pipe';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { InputFormatDirective } from '../input-format.directive';

@Component({
  selector: 'app-heroes',
  imports: [
    CommonModule,
    RemoveSpacesPipe,
    HeroDetailComponent,
    InputFormatDirective,
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})
export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;
}
