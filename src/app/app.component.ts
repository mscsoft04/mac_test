import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'demo';
  
  columnDefs = [
    {headerName: 'Id', field: 'Id'},
    {headerName: 'Country', field: 'Country'},
    {headerName: 'Population (Crores)', field: 'Population (Crores)'},
    {headerName: 'Area (sqkm)', field: 'Area (sqkm)'},
    {headerName: 'National Language', field: 'National Language'},
    {headerName: 'Capital', field: 'Capital'},
    {headerName: 'Currency', field: 'Currency'},
   
];

rowData = [];
constructor(){

}
ngOnInit() {
}
onFileChange(event:any) {
  /** file uploading**/ 
  let selectedFile = event.target.files[0];
  const fileReader = new FileReader();
  fileReader.readAsText(selectedFile);
  fileReader.onload = () => {
    const cJson = fileReader.result;
   let data:any = cJson !== null ? (cJson) : [];
   /** file reading**/
    let obj=JSON.parse(data);
    this.dataBinding(obj);
  }
  fileReader.onerror = (error) => {
    console.log(error);
    /** Error Checking**/
  }
 
}
dataBinding(data:any){
  /** data binding Grid */
  console.log(typeof data)
  let first=data[0];
  let col=Object.keys(first);
 let column = col.map((x:any) =>{
     return {headerName:x, field:x};

 });
  this.columnDefs=column;
  this.rowData=data;




}

}
