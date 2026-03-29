import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Hero } from '../hero';
import { RemoveSpacesPipe } from '../remove-spaces.pipe';

@Component({
  selector: 'app-hero-detail',
  imports: [CommonModule, FormsModule, RemoveSpacesPipe],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css',
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
}
