import { Module, Global } from '@nestjs/common';
import { DbService } from './db.service';
import {TypegooseModule} from 'nestjs-typegoose'
import { User } from './models/user.model';
import { Puzzle } from './models/puzzle.model';
import { Puzzleset } from './models/puzzleset.model';
import { Casegroup } from './models/casegroup.model';
import { Algcase } from './models/algcase.model';


// 引入各种模型
const models = TypegooseModule.forFeature([User,Puzzle,Puzzleset,Casegroup,Algcase])

@Global()
@Module({
  imports : [
    // db.createUser( {user: "XXX",pwd: "XXX",roles: [ { role: "readWrite", db: "algplayer" } ]})
    // 使用异步加载，保证先加载configmodule，然后在加载数据库模块
    TypegooseModule.forRootAsync({
      useFactory(){
        return {
          uri : process.env.DB,
          useCreateIndex:true,
          useNewUrlParser:true,
          useUnifiedTopology:true,
          useFindAndModify:false
        }
      }
    })
    // TypegooseModule.forRoot(process.env.DB,
    // {
    //   useCreateIndex:true,
    //   useNewUrlParser:true,
    //   useUnifiedTopology:true,
    //   useFindAndModify:false
    // }
    ,
    models
  ],
  providers: [DbService],
  exports: [DbService,models],
})
export class DbModule {}
