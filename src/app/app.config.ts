import { ApplicationConfig, importProvidersFrom} from '@angular/core';

import { FormsModule } from '@angular/forms';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(FormsModule)
  ]
};
