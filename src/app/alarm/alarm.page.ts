import { Component } from '@angular/core';

@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.page.html',
  styleUrls: ['./alarm.page.scss'],
})
export class AlarmPage {
  public alarmTime: string = '';
  private alarmIntervalId: any;

  constructor() {}

  setAlarm() {
    const alarmTimeParts = this.alarmTime.split(':');
    const alarmHours = parseInt(alarmTimeParts[0]);
    const alarmMinutes = parseInt(alarmTimeParts[1]);
    const alarmSeconds = parseInt(alarmTimeParts[2]);

    this.alarmIntervalId = setInterval(() => {
      const currentTime = new Date();
      if (
        currentTime.getHours() === alarmHours &&
        currentTime.getMinutes() === alarmMinutes &&
        currentTime.getSeconds() === alarmSeconds
      ) {
        alert('Alarme disparado!');
        clearInterval(this.alarmIntervalId);
      }
    }, 1000);
  }
}

