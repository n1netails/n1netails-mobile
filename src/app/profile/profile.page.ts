import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonInput, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { trash, create, save, power } from 'ionicons/icons';

// Mock based on UsersEntity
export interface UsersEntity {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
}

// Mock based on N1neTokenResponse
export interface N1neTokenResponse {
  id: number;
  token: string;
  name: string;
  userId: number;
  organizationId: number;
  revoked: boolean;
  enabled: boolean;
  createdDate: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonInput, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonIcon],
})
export class ProfilePage {
  user: UsersEntity = {
    id: 1,
    email: 'jules@n1netails.com',
    firstName: 'Jules',
    lastName: 'The Engineer',
  };

  tokens: N1neTokenResponse[] = [
    { id: 1, token: 'n1ne-*****', name: 'Primary API Key', userId: 1, organizationId: 1, revoked: false, enabled: true, createdDate: new Date().toISOString() },
    { id: 2, token: 'n1ne-*****', name: 'Development Key', userId: 1, organizationId: 1, revoked: true, enabled: false, createdDate: new Date().toISOString() },
  ];

  newTokenName = '';

  constructor() {
    addIcons({ trash, create, save, power });
  }

  saveProfile() {
    console.log('Saving profile:', this.user);
    // Here you would call a service to save the user data
  }

  createToken() {
    if (!this.newTokenName) return;
    const newToken: N1neTokenResponse = {
      id: Math.floor(Math.random() * 1000),
      token: `n1ne-${Math.random().toString(36).substring(2, 10)}`,
      name: this.newTokenName,
      userId: this.user.id,
      organizationId: 1, // Assuming a default org for now
      revoked: false,
      enabled: true,
      createdDate: new Date().toISOString()
    };
    this.tokens.push(newToken);
    this.newTokenName = '';
    console.log('Created token:', newToken);
  }

  revokeToken(token: N1neTokenResponse) {
    token.revoked = true;
    token.enabled = false;
    console.log('Revoked token:', token);
  }

  enableToken(token: N1neTokenResponse) {
    token.revoked = false;
    token.enabled = true;
    console.log('Enabled token:', token);
  }

  deleteToken(tokenId: number) {
    this.tokens = this.tokens.filter(t => t.id !== tokenId);
    console.log('Deleted token with ID:', tokenId);
  }
}