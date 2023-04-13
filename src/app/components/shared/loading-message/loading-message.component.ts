import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-loading-message',
  templateUrl: './loading-message.component.html',
  styleUrls: ['./loading-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingMessageComponent {}
