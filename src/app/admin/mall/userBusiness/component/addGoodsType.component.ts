// import { Component, OnInit, Inject } from '@angular/core';
// import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
// import { Router, ActivatedRoute } from '@angular/router';
// import gql from 'graphql-tag';
// import { Apollo } from 'apollo-angular/Apollo';

// @Component({
//     selector: 'mall-add-goodsType',
//     templateUrl: 'addGoodsType.html',
// })

// export class AddGoodsTypeComponent implements OnInit {

//     goodsTypeForm: FormGroup = this.fb.group({
//         id: [''],
//         name: ['', Validators.required],
//         business_id: ['', Validators.required],
//         isValid: [true],
//     });

//     goodsType: FormStr = {
//         data: gql`query($id:String){
//             info:getGoodsTypeById(id:$id){
//             id,name,imageIds:Images{ id name:originalname url:path }
//             }
//         }`,    
//         save: gql`mutation($info:inputGoodsType){
//             saveGoodsType(goodsType:$info){ id }
//         }`,
//         url: "admin/goods-type",
//     }

//     business: Array<{ key: string, value: string }>;


//     constructor( @Inject("commonData") private cdate: CommonData,
//         private fb: FormBuilder, private route: ActivatedRoute,
//         private router: Router,
//         private apollo:Apollo) {
//     }

//     ngOnInit() {
//         this.apollo.query({query:gql`
//             query($id:String){
//                 getBusinessWhere()
//             }
//         `})
//      }
// }