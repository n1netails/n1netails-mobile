import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/angular/standalone';

export interface TailResponse {
  id: number;
  title: string;
  description: string;
  timestamp: string; // Using string for mock data simplicity
  resolvedTimestamp: string;
  assignedUserId: number | null;
  assignedUsername: string;
  details: string;
  level: string;
  type: string;
  status: string;
  metadata: { [key: string]: string };
  organizationId: number;
}

@Component({
  selector: 'app-alerts',
  templateUrl: 'alerts.page.html',
  styleUrls: ['alerts.page.scss'],
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent],
})
export class AlertsPage {
  alerts: TailResponse[] = [
    {
      id: 1,
      title: 'High CPU Usage',
      description: 'CPU usage is over 90% on server-1.',
      timestamp: '2025-09-27T10:00:00Z',
      resolvedTimestamp: '',
      assignedUserId: 101,
      assignedUsername: 'jules',
      details: 'The `billing-service` process is consuming high CPU.',
      level: 'CRITICAL',
      type: 'SYSTEM_ALERT',
      status: 'OPEN',
      metadata: { region: 'us-east-1', environment: 'production' },
      organizationId: 1,
    },
    {
      id: 2,
      title: 'Database Connection Lost',
      description: 'Cannot connect to the primary database.',
      timestamp: '2025-09-27T09:30:00Z',
      resolvedTimestamp: '2025-09-27T09:45:00Z',
      assignedUserId: 102,
      assignedUsername: 'jane.doe',
      details: 'Connection timed out after 3 retries.',
      level: 'ERROR',
      type: 'DATABASE_ALERT',
      status: 'RESOLVED',
      metadata: { 'db_host': 'db.example.com', 'cluster': 'main-cluster' },
      organizationId: 1,
    },
    {
      id: 3,
      title: 'Low Disk Space',
      description: 'Disk space on /var/log is critically low.',
      timestamp: '2025-09-27T11:00:00Z',
      resolvedTimestamp: '',
      assignedUserId: null,
      assignedUsername: '',
      details: 'Less than 1GB of disk space remaining.',
      level: 'WARNING',
      type: 'SYSTEM_ALERT',
      status: 'OPEN',
      metadata: { 'mount_point': '/var/log', 'server': 'app-server-3' },
      organizationId: 1,
    }
  ];

  constructor() {}
}