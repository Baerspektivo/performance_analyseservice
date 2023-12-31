import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, firstValueFrom } from 'rxjs';
import { ApiProperty } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PageSpeedService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  //#region connection to google api with api key
  @ApiProperty()
  async runPageSpeedTest(url: string): Promise<any> {
    const API_KEY = this.configService.get<string>('API_KEY');
    const response$ = this.httpService
      .get(
        `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}&key=${API_KEY}`,
      )
      .pipe(map((response) => response.data));
    const data = await firstValueFrom(response$);
    return data;
  }
  //#

  //#region sends the url to the api
  @ApiProperty()
  async getPageSpeedData(url: string): Promise<any> {
    return this.runPageSpeedTest(url);
  }
  //#endregion
}
