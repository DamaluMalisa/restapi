import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    return { msg: 'Hello i am signed up.' };
  }

  signin() {
    return { msg: 'Hello i am signed in.' };
  }
}
