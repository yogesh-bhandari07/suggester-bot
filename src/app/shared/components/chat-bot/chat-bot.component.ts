import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Message {
  role: 'user' | 'assistant';
  body: string;
  beingTyped?: boolean;
}

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css']
})
export class ChatBotComponent implements OnInit {
  chatForm: FormGroup;
  messages: Message[] = [];
  showTyping = false;
  waitingOnResponse = false;
  chatOpen: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.chatForm = this.formBuilder.group({
      newMessage: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.showTyping = true;
    this.waitingOnResponse = true;
    this.simulateBotResponse("Hi, I'm the bot. How can I help you today?");

  }

  sendMessage(): void {
    if (this.chatForm.valid) {
      const userMessage = this.chatForm.get('newMessage')?.value;
      this.messages.push({ role: 'user', body: userMessage });
      this.chatForm.reset();
      
      this.simulateBotResponse(userMessage);
    }
  }

  simulateBotResponse(userMessage: string): void {
    this.showTyping = true;
    this.waitingOnResponse = true;

    setTimeout(() => {
      this.showTyping = false;
      const botResponse = `You said: ${userMessage}`;
      this.messages.push({ role: 'assistant', body: botResponse });
      this.waitingOnResponse = false;
    }, 1500);
  }

toggleChat() {
  this.chatOpen = !this.chatOpen;
}

}
