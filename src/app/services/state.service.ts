import { Injectable, EventEmitter } from '@angular/core';
import { IUser } from '../store';

@Injectable()
export class StateService {
  onCommentsChanged: EventEmitter<any[]> = new EventEmitter<any[]>();

  constructor() { }

  raiseOnCommentsChanged(event) {
    this.onCommentsChanged.emit(event);
  }
}
