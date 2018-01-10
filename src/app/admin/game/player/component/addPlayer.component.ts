import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
    selector: 'admin-add-player',
    templateUrl: 'addPlayer.html'
})

export class AddPlayerComponent implements OnInit {

    playerForm: FormGroup = this.fb.group({
        id: [0],
        name: [{ value: '', disabled: true }],
        cardNum: [{ value: 0, disabled: true }],
        addCardNum: [1, Validators.required]
    }, { validator: this.isNumber });

    playName: string;

    constructor(private apollo: Apollo, private router: Router,
        private fb: FormBuilder,
        private route: ActivatedRoute) {

        let id = this.route.snapshot.params['id'];

        if (id == undefined) return;

        this.getPlayerInfo(id);
    }

    ngOnInit() { }



    //验证添加数量不能小于0
    private isNumber(g: FormGroup) {
        if (g.get("addCardNum").value <= 0) {
            g.get('addCardNum').setErrors({ isNumber: true })
        }
    }

    getPlayerInfo(id: string) {
        var sql = gql`query get($id:String){
            player:getPlayerById(id:$id) { id name cardNum }
        }`
        this.apollo.query<{ player: any }>({ query: sql, variables: { id: id } })
            .subscribe(({ data }) => {
                this.playName = data.player.name;
                var { id, name, cardNum, addCardNum = 1 } = data.player;
                var play = {
                    id, name, cardNum, addCardNum
                }
                this.playerForm.setValue(play);
            });
    }

    async onSubmit(info: { id: number, addCardNum: number }) {
        var addCard = info.addCardNum;
        var sql = gql`mutation upPlayCard($id:String,$cardNum:Int,$cardLog:inputCardLog){
            updatePlayerCard(id:$id,cardNum:$cardNum)
            saveCardLog(cardLog:$cardLog){ id }
        }`;

        var userName = "admin";
        var playName = this.playName;
        var type = addCard ? "加房卡" : "减房卡";
        var cardLog = {
            userName, playName, card: addCard, type
        };
        this.apollo.mutate({
            mutation: sql, variables: {
                id: info.id,
                cardNum: addCard,
                cardLog
            }
        }).subscribe(({ data }) => {
            alert(data ? "充值成功" : "充值失败");
            this.router.navigate(['../admin/player']);
        })
    }
}