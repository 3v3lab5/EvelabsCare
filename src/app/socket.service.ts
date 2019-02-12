import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
	private socket: SocketIOClient.Socket;
  	constructor() {
  		this.socket = io('http://173.230.145.245:4000');

  	}

  	// EMITTER
  	  sendMessage(topic:string,msg: string) {
  	    this.socket.emit('publish', {topic:topic ,message: msg});
  	  }

  	  // HANDLER
  	  onMessage() {
  	    return Observable.create(observer => {
  	      this.socket.on('dripo', msg => {
  	        observer.next(msg);
  	      });
  	    });
  	  }
}
