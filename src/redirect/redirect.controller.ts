import { Controller, Get, Param, Redirect } from '@nestjs/common';
import { aggroUrl } from 'src/constants';

@Controller('redirect')
export class RedirectController {
  private readonly aggroUrl = aggroUrl;
  @Get('/aggro')
  @Redirect(aggroUrl, 301)
  redirectToAggro() {
    return { url: this.aggroUrl };
  }
}
