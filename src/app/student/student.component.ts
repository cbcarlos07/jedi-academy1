import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jad-studante',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  name: string = 'Luke'
  isJedi: boolean = false
  constructor() { }

  ngOnInit() {
  }

}
