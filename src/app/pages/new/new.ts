import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { SeriesInterface, SeriesService } from '../../service/series.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './new.html',
  styleUrl: './new.css',
})
export class NewComponent {
  protected responseId = signal<number | null>(null);

  form = new FormGroup({
    title : new FormControl('',{nonNullable: true, validators: [Validators.required, Validators.minLength(3)]}),
    channel : new FormControl('',{nonNullable: true, validators: [Validators.required]}),
    rating : new FormControl(0,{nonNullable: true, validators: [Validators.required, Validators.min(0), Validators.max(10)]}),
  })

  constructor(
    private serieService: SeriesService,
    private router: Router
  ){}

  save(){
    if(this.form.invalid) return;

    const payload: SeriesInterface = {
      id: 0,
      title: this.form.controls.title.value,
      channel: this.form.controls.channel.value,
      rating: this.form.controls.rating.value,
    };

    this.serieService.create(payload).subscribe({
      next: (created) =>{
        this.responseId.set(created.id);
        this.router.navigate(['/', created.id ?? 1 ]),
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 2000);
      },        
      error: (err) => console.error('Error creating character: ', err)
    })
  }
}

