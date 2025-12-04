import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class ChatbotService {

  private baseUrl = environment.apiURL + '/api/RAG/chat';

  constructor(private http: HttpClient) {}

  sendMessage(message: string) {
    return this.http.post<any>(this.baseUrl, {
      message,
      topK: 5
    });
  }
}
