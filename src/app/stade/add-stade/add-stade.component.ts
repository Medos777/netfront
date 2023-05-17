import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Categorie} from "../../Model/categorie";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {LoisirService} from "../../Service/loisir.service";
import {Loisir} from "../../Model/loisir";
import {StadeService} from "../../Service/stade.service";
import {Stade} from "../../Model/stade";
import {Stadium} from "../../Model/stadium";

@Component({
  selector: 'app-add-stade',
  templateUrl: './add-stade.component.html',
  styleUrls: ['./add-stade.component.css']
})
export class AddStadeComponent implements OnInit {
  loisirForm!: FormGroup;
  categories: Categorie[];
  id:number;
  constructor(
    public toastr: ToastrService,
    private router : Router,@Inject(MAT_DIALOG_DATA)  public data:any,
    public dialogRef:MatDialogRef<AddStadeComponent>,

    private formBuilder: FormBuilder,
    private loisirService: LoisirService,
    private stadeservice: StadeService
  ) {
    this.categories = [];
    this.createForm();
    this.id=0;
  }

  ngOnInit() {
    this.createForm();
    this.getCategories();
  }

  createForm() {
    this.loisirForm = this.formBuilder.group({
      name: ['', Validators.required],
      emplacement: ['', Validators.required],
      available: [true],
      categorieId: ['', Validators.required]
    });
  }

  getCategories() {
    this.loisirService.getAllCategories().subscribe(data => {
      this.categories = data;
    });
  }

  onSubmit() {
    if (this.loisirForm.invalid) {
      return;
    }

    const stadium: Stadium = {
      name: this.loisirForm.value.name,
      emplacement: this.loisirForm.value.emplacement,
      available: this.loisirForm.value.available,
      categorieId: +Number(this.loisirForm.value.categorieId), // Ensure categorieId is converted to a number
      categorie: null as unknown as Categorie
    };
    this.id=Number(stadium.categorieId);

    if (!isNaN(this.id)) { // Check if categorieId is a valid number
      this.loisirService.getCategorieById(this.id).subscribe(
        (categorie: Categorie) => {
          stadium.categorie = categorie;
          this.stadeservice.addStade(stadium).subscribe( data => {
            this.dialogRef.close();

            this.loisirService.getAll().subscribe(
              response =>{this.loisirService.list = response;}
            );
            this.router.navigate(['/stades']);
          });
        },
        error => {
          console.error('Error retrieving categorie:', error);
        }
      );
    } else {
      console.error('Invalid categorieId');
    }
  }
}
