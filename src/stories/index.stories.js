import { storiesOf } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome, Button } from '@storybook/angular/demo';

import { AppComponent } from '../app/app.component';

storiesOf('App Component', module)
  .add('เปลี่ยนชื่อ tile เป็น สวัสดีนะ', () => ({
    component: AppComponent,
    props: {
      title: 'สวัสดีนะ'
    }
  }))
  .add('เปลี่ยนชื่อ tile เป็น กากมาก', () => ({
    component: AppComponent,
    props: {
      title: 'กากมาก'
    }
  }));
