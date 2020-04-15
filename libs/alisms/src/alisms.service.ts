import { Injectable } from '@nestjs/common';
import * as Core from '@alicloud/pop-core'

export interface SmsParams{
    RegionId: string,
    PhoneNumbers: number,
    SignName: string,
    TemplateCode: string,
    TemplateParam: string
}


@Injectable()
export class AlismsService {
    private client: Core
    public params: SmsParams
    constructor(){
        this.client = new Core({
            accessKeyId: process.env.SMS_KEYID,
            accessKeySecret: process.env.SMS_KEYSECRET,
            endpoint: process.env.SMS_ENDPOINT,
            apiVersion: process.env.SMS_VERISON
        })

    }


    private timeschar(char: string, n: number): string{
        let result = ''
        if(n>0){
            for(let i=0;i<n;i++){
                result += char
            }
            return result
        }else{
            return ''
        }
    }

    private createVericode(): string{
        const code = Math.floor(Math.random()*1000000)
        return this.timeschar('0',6-String(code).length) + String(code)
    }

    public async sendVeriCode(phone: number){
        const vericode = this.createVericode()
        this.params = {
            RegionId: process.env.SMS_REGION,
            PhoneNumbers: phone,
            SignName: process.env.SMS_SIGNNAME,
            TemplateCode: process.env.SMS_TEMCODE,
            TemplateParam: `{"code":${vericode}}`,
        }
        this.client.request('SendSms',this.params,'POST').then((result)=>{
            console.log(JSON.stringify(result))
        })
    }



}
