import { Controller, Get, InternalServerErrorException, Req, Res } from '@nestjs/common';
import { CookieOptions, Request, Response } from 'express';
import { GetCookie } from './return-value/getCookie.return-value';

@Controller('testing-cookie')
export class TestingCookieController {

  /** 
   * This is function is to send cookie from be to fe 
   * @param req get request information
   * @param res send response to client
   * @returns GetCookie type
   */
  @Get()
  getCookie(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response
  ): GetCookie {
    try {
      const requestCookie = req.signedCookies;
      const cookieOptions: CookieOptions = {
        maxAge: 3000,
        httpOnly: true,
        signed: true,
      } 
      res.cookie('cookie', 'testing cookie', cookieOptions);      
      return { requestCookie };
    } catch (error) {
      throw new InternalServerErrorException('Fail to get coocdckie');
    }
  }
}
