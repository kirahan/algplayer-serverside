import { Injectable } from '@nestjs/common';
import * as OSS from 'ali-oss'



@Injectable()
export class AliossService {
    private client: OSS  


    constructor() {
        this.client = new OSS({
            accessKeyId: process.env.OSS_KEYID,
            accessKeySecret: process.env.OSS_KEYSECRET,
            bucket: process.env.OSS_BUCKET,
            region: process.env.OSS_REGION
        })
    }

    // 查询buckets列表
    public async  listBuckets () {
        try {
        const result = await this.client.listBuckets(null,{timeout:2000})
        console.log(result)
        } catch(err) {
        console.log(err)
        }
    }

    // 上传文件
    public async uploadFile(name: string, filepath: string){
        try{
            const result = await this.client.put(name,filepath)
            console.log(result);
        }
        catch(err){
            console.log (err);
        }
    }

}
