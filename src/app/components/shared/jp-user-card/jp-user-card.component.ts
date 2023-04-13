import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { JsonPlaceholderUser } from 'src/app/types/jsonplaceholder-types';

@Component({
  selector: 'app-jp-user-card',
  templateUrl: './jp-user-card.component.html',
  styleUrls: ['./jp-user-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JpUserCardComponent {
  @Input() user!: JsonPlaceholderUser;
}
