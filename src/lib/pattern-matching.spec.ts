
import { match, P } from 'ts-pattern';

type Data =
  | { type: 'text'; content: string }
  | { type: 'img'; src: string };

type Result =
  | { type: 'ok'; data: Data }
  | { type: 'error'; error: Error };


describe('ts-pattern', () => {

    
  it('canonical example', () => {

    const matchState = (result:Result) => match(result)
      .with({ type: 'error' }, () => `<p>Oups! An error occured</p>`)
      .with({ type: 'ok', data: { type: 'text' } }, (res) => `<p>${res.data.content}</p>`)
      .with({ type: 'ok', data: { type: 'img', src: P.select() } }, (src) => `<img src=${src} />`)
      .exhaustive();
      
    const result: Result = { type: 'ok', data: { type: 'img', src: 'https://picsum.photos/200/300' } };

    expect(matchState(result)).toBe('<img src=https://picsum.photos/200/300 />');
  });

});
