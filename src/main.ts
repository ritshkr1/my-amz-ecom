import { bootstrapApplication } from '@angular/platform-browser';
import { rootConfig } from './app/root.config';
import { Root } from './app/root';

bootstrapApplication(Root, rootConfig)
  .catch((err) => console.error(err));
