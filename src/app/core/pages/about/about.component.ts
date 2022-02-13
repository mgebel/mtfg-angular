import { Component, OnInit } from '@angular/core';
import { faJava } from '@fortawesome/free-brands-svg-icons';
import { faBrain } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  faBrain = faBrain;
  constructor() { }

  ngOnInit(): void {
  }

}
