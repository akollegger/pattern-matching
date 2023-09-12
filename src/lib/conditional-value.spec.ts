
import { match, P } from 'ts-pattern';

describe('conditional value assingment', () => {
  it('could use if/else', () => {
    const result = Math.random() > 0.5 ? 'ok' : 'error';
    let message: string;
    if (result === 'ok') {
      message = 'Everything is fine';
    } else {
      message = 'Oops! An error occured';
    }
    expect([
      'Oops! An error occured',
      'Everything is fine'
    ]).toContain(message);
  })
  it('could use a switch statement', () => {
    const result = Math.random() > 0.5 ? 'ok' : 'error';
    let message: string;
    switch (result) {
      case 'ok':
        message = 'Everything is fine';
        break;
      case 'error':
        message = 'Oops! An error occured';
        break;
    }
    expect([
      'Oops! An error occured',
      'Everything is fine'
    ]).toContain(message);
  })
  it('could use a ternary operator', () => {
    const result = Math.random() > 0.5 ? 'ok' : 'error';
    const message = result === 'ok' ? 'Everything is fine' : 'Oops! An error occured';
    expect([
      'Oops! An error occured',
      'Everything is fine'
    ]).toContain(message);
  })
  it('may not handle all cases', () => {
    const result = Math.random() > 0.5 ? 'ok' : Math.random() > 0.9 ? 'retry' : 'error';
    const message = result === 'ok' ? 'Everything is fine' : 'Oops! An error occured';
    expect([
      'Oops! An error occured',
      'Everything is fine'
    ]).toContain(message);
  })
  it('could use a pattern matching library', () => {
    const result = Math.random() > 0.5 ? 'ok' : Math.random() > 0.9 ? 'retry' : 'error';
    const message = match(result)
      .with('ok', () => 'Everything is fine')
      .with('error', () => 'Oops! An error occured')
      .otherwise(() => 'Something unexpected happened');
      expect([
        'Oops! An error occured',
        'Everything is fine'
      ]).toContain(message);
  })
  it('could use a pattern matching library', () => {
    const result = Math.random() > 0.5 ? 'ok' : Math.random() > 0.9 ? 'retry' : 'error';
    const message = match(result)
      .with('ok', () => 'Everything is fine')
      .with('error', () => 'Oops! An error occured')
      .exhaustive();
      expect([
        'Oops! An error occured',
        'Everything is fine'
      ]).toContain(message);
  })

})