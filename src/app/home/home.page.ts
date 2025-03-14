// Import necessary modules and components from Angular and Ionic frameworks
import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

// Define the component metadata
@Component({
  selector: 'app-home', // The CSS selector that identifies this component in a template
  templateUrl: 'home.page.html', // The path to the template file for this component
  styleUrls: ['home.page.scss'], // The path to the stylesheet file for this component
  imports: [RouterLink, IonHeader, IonToolbar, IonTitle, IonContent], // The list of modules and components to import
})
export class HomePage {
  // The constructor for the HomePage component
  constructor() {}
}
