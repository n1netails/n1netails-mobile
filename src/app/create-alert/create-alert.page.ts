import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonInput, IonButton, IonSelect, IonSelectOption, IonTextarea } from '@ionic/angular/standalone';

export interface KudaTailRequest {
  title: string;
  description: string;
  details: string;
  timestamp: string;
  level: string;
  type: string;
  metadata: { [key: string]: string };
}

@Component({
  selector: 'app-create-alert',
  templateUrl: 'create-alert.page.html',
  styleUrls: ['create-alert.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonInput, IonButton, IonSelect, IonSelectOption, IonTextarea],
})
export class CreateAlertPage {
  alert: KudaTailRequest = {
    title: '',
    description: '',
    details: '',
    timestamp: new Date().toISOString(),
    level: 'INFO',
    type: 'MANUAL_ALERT',
    metadata: {},
  };

  metaKey = '';
  metaValue = '';

  constructor() {}

  addMetadata() {
    if (this.metaKey && this.metaValue) {
      this.alert.metadata[this.metaKey] = this.metaValue;
      this.metaKey = '';
      this.metaValue = '';
    }
  }

  removeMetadata(key: string) {
    delete this.alert.metadata[key];
  }

  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  createAlert() {
    // In a real app, you would send this to a service
    console.log('Creating alert:', this.alert);
    // Reset form
    this.alert = {
      title: '',
      description: '',
      details: '',
      timestamp: new Date().toISOString(),
      level: 'INFO',
      type: 'MANUAL_ALERT',
      metadata: {},
    };
  }
}