import {
  Component,
  Input,
  OnChanges,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-ng-on-changes',
  templateUrl: './ng-on-changes.component.html',
  styleUrls: ['./ng-on-changes.component.css'],
})
export class NgOnChangesComponent implements OnChanges {
  @Input('name') nombre: string = '';
  changes: Array<string> = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.changes.push(JSON.stringify(changes));
  }
}
