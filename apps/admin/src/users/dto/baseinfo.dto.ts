import { ApiProperty } from "@nestjs/swagger";
import { Gender } from "@libs/db/models/user.model";




export class BaseInfoDto {
    @ApiProperty({required:false,description:'省份',example: '湖北'})
    province?: string;
    
    @ApiProperty({required:false,description:'城市',example: '武汉'})
    city?: string;
    
    @ApiProperty({required:false,description:'年龄',example: 21})
    age?: number;
    
    @ApiProperty({required:false,description:'性别',example: 1})
    gender?: Gender;

    @ApiProperty({required:false,description:'昵称',example: 'kira'})
    nickname?: string;
    
    
    @ApiProperty({required:false,description:'生日',example: '1990-12-21'})
    birthday?: string;
    
    @ApiProperty({required:false,description:'介绍',example: 'hello'})
    introduction?: string;
    
    @ApiProperty({required:false,description:'头像',example: ''})
    avator?: string;
    
    @ApiProperty({required:false,description:'wcaid',example: '2014zhao03'})
    wcaid?: string;
    
    @ApiProperty({required:false,description:'邮箱',example: '478222961@qq.com'})
    mail?: string;
    
    @ApiProperty({required:false,description:'电话',example: 18827091015})
    phone?: string;
}