import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnChanges {

  form!: FormGroup;
  @Output() public emmitText: EventEmitter<string> = new EventEmitter();
  @Input() public noResults: boolean = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  initForm(){
    this.form = this.formBuilder.group({
      username: [null]
    })
  }

  search(){
    this.emmitText.emit(this.form.get('username')?.value)
    this.form.reset();
  }
}
