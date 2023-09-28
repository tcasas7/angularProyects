import { Component, OnInit } from '@angular/core';
import { student } from 'src/app/models/student';
import { TestSevicesService } from 'src/app/services/test-sevices.service';


@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit   {


  studentList=new Array<student>()
  constructor(private testService: TestSevicesService) {}

ngOnInit(): void {
  this.testService.getAll().subscribe(response => {
    this.studentList=response
    alert(this.studentList)
  })
}
}
