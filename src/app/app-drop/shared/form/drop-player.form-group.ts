import {FormControl, FormGroup} from '@angular/forms';
import {DropPlayerModel} from '../model/drop-player.model';
import {PlayerModel} from '../model/player.model';
import {CodeNameBaseModel} from '../../../../shared/model/base/code-name-base.model';

export class DropPlayerFormGroup extends FormGroup<{
  [property in keyof DropPlayerModel]: FormControl<DropPlayerModel[property]>;
}> {
  constructor() {
    super({
      id: new FormControl(0, {nonNullable: true}),
      part: new FormControl(null, {nonNullable: true}),
      isPaid: new FormControl(false, {nonNullable: true}),
      nick: new FormControl('', {nonNullable: true}),
      class: new FormControl(new CodeNameBaseModel(), {nonNullable: true}),
      player: new FormControl(new PlayerModel(), {nonNullable: true}),
    });
  }
}
