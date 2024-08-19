import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonIcon, IonButton, IonButtons } from '@ionic/angular/standalone';
import { Dog } from '../entities';
import { DogFormComponent } from '../dog-form/dog-form.component';

@Component({
  selector: 'app-first-dog',
  templateUrl: './first-dog.page.html',
  styleUrls: ['./first-dog.page.scss'],
  standalone: true,
  imports: [DogFormComponent, IonButtons, IonButton, IonIcon, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class FirstDogPage implements OnInit {
  showForm = false;
  dog!:Dog[];
  constructor() { }

  ngOnInit() {
    this.dog=[
      {id:1, name:'Gerard', breed:'chihuahua', birthdate:'2020-01-01'},
      {id:2, name:'Phillipe', breed:'berger allemand', birthdate:'2020-01-01'},
      {id:3, name:'Gaëtan', breed:'berger australien',birthdate:'2020-01-01'},
      {id:4, name:'Pantoufle', breed:'berger turc', birthdate:'2020-01-01'},
      {id:5, name:'Francis', breed:'berger français', birthdate:'2020-01-01'}
    ]
  }

}
