import { Component, OnInit, Inject } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'admin-main',
  templateUrl: 'main.html'
})

export class MainComponent {

  total: { totalPlayer: number, newPlayer: number, onlinePlayer: number, useCard: number } =
    { totalPlayer: 0, newPlayer: 0, onlinePlayer: 0, useCard: 0 };

  constructor(@Inject("commonData") private cdate: CommonData,
    private apollo: Apollo) {
    var sql = gql`query($createTime: String!){
        totalPlayer:getPlayerCount(where:"1=1")
        onlinePlayer:getPlayerCount(where:"state =1")
        newPlayer:getPlayerCount(where:$createTime)
        useCard:getCardRecordStatistice(where:$createTime)
      }`;
    var nowDate = this.cdate.toDateFormat();
    var where = { createTime: `FROM_UNIXTIME(createTime/1000)>='${nowDate}'` };
    var qInfo = { query: sql, variables: where };
    this.apollo.query(qInfo).subscribe(({ data }) => Object.assign(this.total, data))
  }
}
