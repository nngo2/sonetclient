import {Component, OnInit, ViewChild} from '@angular/core';
import {SocketService} from '../../services/socket.service';
import {StateService} from '../../services';

@Component({
  selector: 'app-private-chat',
  templateUrl: './private-chat.component.html',
  styleUrls: ['./private-chat.component.css']
})
export class PrivateChatComponent implements OnInit {
  @ViewChild('f') form: any;
  messages: string[] = [];
  enteredMessage: string;
  constructor(private socketService: SocketService, private stateService: StateService) { }
  ngOnInit() {
    this.socketService.initSocket(this.stateService.currentUser._id);
    this.socketService.receiveMessages()
      .subscribe(message =>  this.messages.push(message));
  }
  sendMessage() {
    this.socketService.sendMessage(this.enteredMessage);
    this.form.reset();
  }
}
