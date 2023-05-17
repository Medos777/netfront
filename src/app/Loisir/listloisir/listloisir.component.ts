import {Component, Inject, OnInit} from '@angular/core';
import {CategorieFilterPipePipe} from "../../categorie-filter-pipe.pipe";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {LoisirService} from "../../Service/loisir.service";
import {AddLoisirComponent} from "../add-loisir/add-loisir.component";
import {Loisir} from "../../Model/loisir";

@Component({
  selector: 'app-listloisir',
  templateUrl: './listloisir.component.html',
  styleUrls: ['./listloisir.component.css']
})
export class ListloisirComponent implements OnInit{
  p: number = 1;
  searchText: string = '';
  constructor(public crudApi: LoisirService,public toastr: ToastrService,
              private router : Router,public fb: FormBuilder,
              private matDialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef:MatDialogRef<AddLoisirComponent>) { }
  ngOnInit() {
    //this.faCoffee = faCoffee;

    this.getData();



  }
  getData(){
    this.crudApi.getAll().subscribe(
      response =>{this.crudApi.list = response;}
    );
  }
addLoisir()
  {
   this.crudApi.choixmenu = "A";
    const dialogConfig = new MatDialogConfig();
   dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
  dialogConfig.width="70%";
    dialogConfig.height="50%";
    this.matDialog.open(AddLoisirComponent, dialogConfig);
  }
// deleteCategory(id: number) {
//      this.crudApi.deleteCategory(id).subscribe(
//        () => {
//         // Category deleted successfully
//          this.getData(); // Refresh the list after deletion
//        },
//        (error) => {
//         console.log(error);
//        }
//      );
//    }

   selectData(item : Loisir) {
     this.crudApi.choixmenu = "M";
   // this.AddL.dataForm = this.fb.group(Object.assign({},item));
    const dialogConfig = new MatDialogConfig();
     dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width="50%";

     this.matDialog.open(AddLoisirComponent, dialogConfig);
  }
}
