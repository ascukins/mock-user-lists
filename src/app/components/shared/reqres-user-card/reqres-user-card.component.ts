import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ReqResUser } from 'src/app/types/reqres-types';

@Component({
  selector: 'app-reqres-user-card',
  templateUrl: './reqres-user-card.component.html',
  styleUrls: ['./reqres-user-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReqresUserCardComponent {
  @Input() user!: ReqResUser;
}
