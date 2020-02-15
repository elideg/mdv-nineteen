import { Phone } from './phone';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

const BASE_URL = 'https://db-30x30.herokuapp.com'

@Injectable({
  providedIn: 'root'
})
export class PhonesService {
model = 'phones'

  constructor(private httpClient: HttpClient) { }

  getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }

  all() {
    return this.httpClient.get(this.getUrl());
  }

  create(phone: Phone) {
    return this.httpClient.post(this.getUrl(), phone);
  }

  delete(phone: Phone) {
    return this.httpClient.delete(this.getUrlForId(phone.id));
  }

  update(phone: Phone) {
    return this.httpClient.put(this.getUrlForId(phone.id), phone);
  }
}
