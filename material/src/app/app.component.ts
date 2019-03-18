import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  thread = {
    title: 'this random thread'
  };
  loaded: any = false;
  constructor() {
    this.loaded = 'fuck';
    setTimeout(() => (this.loaded = true), 3000);
  }
  public posts = [
    {
      username: 'shitposter general',
      date: new Date(),
      id: 12345,
      message:
        'blah blah blah. ipsum deloram etc etcdfjm j j n fvjk nfvlkjdsf' +
        'vnsdjfnvfj vsnkjdsfnvlk sdnfvjsdnsdkf lvslkjdfvns jdklfvnslkfdn jvsdfkjnv  sdlkfnv dskjfnvsk jdfvnkds.' +
        'vnsdjfnvfj vsnkjdsfnvlk sdnfvjsdnsdkf lvslkjdfvns jdklfvnslkfdn jvsdfkjnv  sdlkfnv dskjfnvsk jdfvnkds.' +
        'vnsdjfnvfj vsnkjdsfnvlk sdnfvjsdnsdkf lvslkjdfvns jdklfvnslkfdn jvsdfkjnv  sdlkfnv dskjfnvsk jdfvnkds.' +
        'vnsdjfnvfj vsnkjdsfnvlk sdnfvjsdnsdkf lvslkjdfvns jdklfvnslkfdn jvsdfkjnv  sdlkfnv dskjfnvsk jdfvnkds.'
    },
    {
      username: 'shitposter maximus',
      date: new Date(),
      id: 12325,
      message: 'blah blah blah. ipsum deloram etc etc.'
    },
    {
      username: 'danklord virgionus',
      date: new Date(),
      id: 12453,
      message: 'blah blah blah. ipsum deloram etc etc.'
    },
    {
      username: 'uber edge',
      date: new Date(),
      id: 12765,
      message: 'blah blah blah. ipsum deloram etc etc.'
    }
  ];
  title = 'material';
}
