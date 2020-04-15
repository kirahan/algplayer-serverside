import { Injectable } from '@nestjs/common';
import {createTransport} from 'nodemailer'

export interface EmailOptions {
    to: string;
    subject?: string;
    text?: string;
    html?: string;
}


@Injectable()
export class EmailService {
    private transporter
    private clientIsValid: boolean;

    constructor() {
        // console.log(nodemailer)
        this.transporter = createTransport({
        host: 'smtp.qq.com',
        secure: true,
        port: 465,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
        });
        this.verifyClient();
    }
    // 验证有效性
    private verifyClient(): void {
        return this.transporter.verify((error) => {
        if (error) {
            this.clientIsValid = false;
            setTimeout(this.verifyClient.bind(this), 1000 * 60 *  30);
            console.warn('邮件客户端初始化连接失败！将在半小时后重试：',error)
        } else {
            this.clientIsValid = true;
            console.info('邮件客户端初始化连接成功！随时可发送邮件');
        }
        });
    }

    // 发邮件
    public sendMail(mailOptions: EmailOptions) {
        if (!this.clientIsValid) {
        console.warn('由于未初始化成功，邮件客户端发送被拒绝！');
        return false;
        }
        const options = Object.assign(mailOptions, { from: process.env.EMAIL_USER });
        this.transporter.sendMail(options, (error, info) => {
        if (error) {
            console.warn('邮件发送失败！');
        } else {
            console.info('邮件发送成功');
        }
        });
    }

    public sendCode(mailOptions: EmailOptions, code: string){

        const _html = `<h2>亲爱的用户:</h2>
        <p>您正在AlgPlayer进行邮箱绑定的操作，本次请求的邮件验证码是：</p>
        <h3 style="color:rgb(34, 161, 214);font-size:38px; font-weight:bold;">${code}</h3>
        <p>为了保证您账号的安全性，请您在5分钟内完成验证。</p>
        <p>如非本人操作，请忽略该邮件。</p>
        <p>本邮件由系统自动发出，请勿回复，如有疑问，请联系478222961@qq.com。</p>
        `
        if (!this.clientIsValid) {
            console.warn('由于未初始化成功，邮件客户端发送被拒绝！');
            return false;
            }
            const options = Object.assign(mailOptions, { 
                from: `"AlgPlayer" <${process.env.EMAIL_USER}>` ,
                to: mailOptions.to,
                subject: '[AlgPlayer]账号安全中心-绑定邮箱验证',
                html: _html
            });

            this.transporter.sendMail(options, (error, info) => {
            if (error) {
                console.warn('邮件发送失败！');
            } else {
                console.info('邮件发送成功');
            }
        });
    }

    public sendLink(mailOptions: EmailOptions, link: string){

        const _html = `<h2>亲爱的用户:</h2>
        <p>您正在绑定邮箱</p>
        <p>请点击以下链接激活账户，该链接3小时内有效。</p>
        <a href="${link}" target="_blank">${link}</a>
        <p>如无法点击，请复制链接到浏览器打开。</p>
        <p>如非本人操作，请忽略该邮件。</p>
        <p>本邮件由系统自动发出，请勿回复，如有疑问，请联系478222961@qq.com。</p>
        `
        if (!this.clientIsValid) {
            console.warn('由于未初始化成功，邮件客户端发送被拒绝！');
            return false;
            }
            const options = Object.assign(mailOptions, { 
                from: `"AlgPlayer" <${process.env.EMAIL_USER}>`  ,
                to: mailOptions.to,
                subject: '[AlgPlayer]账号安全中心-绑定邮箱',
                html: _html
            });

            this.transporter.sendMail(options, (error, info) => {
            if (error) {
                console.warn('邮件发送失败！');
            } else {
                console.info('邮件发送成功');
            }
        });
    }
}


