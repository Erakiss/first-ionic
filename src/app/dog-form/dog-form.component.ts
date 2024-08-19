import { Component, Input, OnInit } from '@angular/core';
import { Dog } from '../entities';
import { CommonModule } from '@angular/common';
import { IonInput, IonDatetimeButton, IonModal, IonDatetime } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dog-form',
  templateUrl: './dog-form.component.html',
  styleUrls: ['./dog-form.component.scss'],
  standalone: true,
  imports: [IonDatetime, IonModal, IonDatetimeButton, IonInput, CommonModule, FormsModule]
})
export class DogFormComponent  implements OnInit {
  @Input()
  dog!:Dog[];

  constructor() { }

  ngOnInit() {}

}
