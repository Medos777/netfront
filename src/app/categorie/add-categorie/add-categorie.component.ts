import {Component, Inject} from '@angular/core';
import {Categorie} from "../../Model/categorie";
import {CategorieService} from "../../Service/categorie.service";
import {FormBuilder, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent {
  submitted=false;
  constructor(public crudApi: CategorieService ,public fb: FormBuilder,public toastr: ToastrService,
              private router : Router,@Inject(MAT_DIALOG_DATA)  public data:any,
              public dialogRef:MatDialogRef<AddCategorieComponent>,
  ) { }

  ngOnInit() {
    this.getData();
    if (this.crudApi.choixmenu == "A")
    {this.infoForm()};
  }



  infoForm() {
    this.crudApi.dataForm = this.fb.group({
      id: null,
      nom: ['', [Validators.required]],

    });

  }

  getData() {
    this.crudApi.getAll().subscribe(
      response =>{this.crudApi.list = response;}
    );


  }

  ResetForm() {
    this.crudApi.dataForm.reset();
  }
  get f() { return this.crudApi.dataForm.controls; }

  onSubmit() {
    this.submitted = true;
    if(this.crudApi.dataForm.invalid){
      console.log("invalid")
      return;

    }

    if (this.crudApi.choixmenu == "A")
    {
      this.addData();
    }
    else
    {
console.log("in the future  update");
     // this.updateData()
    }

  }



  addData() {
    let mod:String=this.crudApi.dataForm.value.libelle;
    this.crudApi.createData(this.crudApi.dataForm.value).
    subscribe( data => {
      this.dialogRef.close();

      this.crudApi.getAll().subscribe(
        response =>{this.crudApi.list = response;}
      );
      this.router.navigate(['/loisirs']);
    });


  }


}

