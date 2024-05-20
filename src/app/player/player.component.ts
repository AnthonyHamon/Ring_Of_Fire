import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-player',
  standalone: true,
  imports: [],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent {

  @Input() Name:string = '';
  @Input() activePlayer:boolean = false;

}
