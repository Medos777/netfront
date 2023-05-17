import {Component, Inject, OnInit} from '@angular/core';
import {Loisir} from "../../Model/loisir";
import {Categorie} from "../../Model/categorie";
import {LoisirService} from "../../Service/loisir.service";
import {CategorieService} from "../../Service/categorie.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-loisir',
  templateUrl: './add-loisir.component.html',
  styleUrls: ['./add-loisir.component.css']
})
export class AddLoisirComponent implements OnInit {
  loisirForm!: FormGroup;
  categories: Categorie[];
id:number;
  constructor(
    public toastr: ToastrService,
    private router : Router,@Inject(MAT_DIALOG_DATA)  public data:any,
    public dialogRef:MatDialogRef<AddLoisirComponent>,

    private formBuilder: FormBuilder,
    private loisirService: LoisirService
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
      nom: ['', Validators.required],
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

    const loisir: Loisir = {
      nom: this.loisirForm.value.nom,
      categorieId: +Number(this.loisirForm.value.categorieId), // Ensure categorieId is converted to a number
      categorie: null as unknown as Categorie
    };
  this.id=Number(loisir.categorieId);

    if (!isNaN(this.id)) { // Check if categorieId is a valid number
      this.loisirService.getCategorieById(this.id).subscribe(
        (categorie: Categorie) => {
          loisir.categorie = categorie;
          this.loisirService.addLoisir(loisir).subscribe( data => {
            this.dialogRef.close();

            this.loisirService.getAll().subscribe(
              response =>{this.loisirService.list = response;}
            );
            this.router.navigate(['/loisirs']);
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
