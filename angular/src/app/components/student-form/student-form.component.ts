import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentHttpService } from 'src/app/service/student-http.service';
import { ClassroomComponent } from '../classroom/classroom.component';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  @ViewChild('form') form: NgForm;
  reactForm: FormGroup;

  student: Student;
  studentId: string;
  studentForm: Student = {firstName:'', lastName:'', email:'', classroom: ClassroomComponent};


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: StudentHttpService
  ) { }

  ngOnInit(): void {
    this.studentId = this.route.snapshot.params.id;
    if(this.studentId){
      this.service.getById(this.studentId).subscribe(
        data => {this.studentForm = data;
        }
      )
    }
  }

  saveStudent(form : NgForm){
    if(this.studentId){
      this.service.update(form.value, this.studentId).subscribe(
        student => this.router.navigate(['student-list']),
        err => console.error(err)
      )
    }else {
      this.service.save(form.value).subscribe(
        student => this.router.navigate(['student-list']),
        err => console.error(err)
      )
    }
  }
  }

}
