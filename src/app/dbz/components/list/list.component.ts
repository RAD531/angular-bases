import { ChangeDetectionStrategy, Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'dbz-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] =
  [
    {
      name: 'Trunk',
      power: 10,
    }
  ];

  @Output()
  public onDeleteCharacterById: EventEmitter<string> = new EventEmitter();

  DeleteCharacterByID(charatcer: Character):void {
    if (!charatcer.id) return;
    this.onDeleteCharacterById.emit(charatcer.id);
  }
 }
