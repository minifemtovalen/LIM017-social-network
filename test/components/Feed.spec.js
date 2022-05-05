import * as FirebaseUtil from '../../src/Firebase/Firebase-util.js';
import * as Firestore from '../../src/Firebase/firestore.js';

import { Feed } from '../../src/components/Feed';

jest.mock('../../src/Firebase/Firebase-util.js');
jest.mock('../../src/Firebase/firestore.js');

describe('Visualizacion Pagina de Feed', () => {
  it('Ingresar al Feed sin Usuario', () => {
    delete window.location;
    window.location = { href: '' };
    const alertMock = jest.spyOn(window, 'alert').mockImplementation();

    Feed();

    expect(alertMock).toBeCalled();
    expect(window.location.href).toBe('/Login');
  });

  it('Ingresar al Feed con Usuario', () => {
    sessionStorage.setItem('uid', '12345');
    sessionStorage.setItem('username', 'Testing');

    jest.spyOn(Firestore, 'onGetPostInRealTime').mockImplementation();

    const test = Feed();

    const userWelcome = test.querySelector('#createNewPost > p');
    expect(userWelcome.innerHTML).toBe(' Hola Testing');

    const feedPost = test.querySelector('#feedPost1');
    expect(feedPost.innerHTML).toBe('');
  });
});
