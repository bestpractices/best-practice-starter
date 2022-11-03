import sinon from 'sinon';
import { setTimeout } from 'node:timers';
import { context } from '../index';

describe('request-context', () => {
  test('good name for a test here', async () => {
    const expectedContext = { requestId: 'dsfsd-4234-fsdfsd-4323' };
    context().run(expectedContext, () => null);
    await setTimeout(() => null, 1);

    const receivedContext = context().getStore();

    expect(receivedContext.requestId).toMatch(expectedContext.requestId);
  });

  

  test('When instantiating a new context with initial values, then should get back the context', () => {
    // Arrange
    const getCurrentRequestContext = sinon.spy(() => context().getStore());

    const initialContext = { requestId: 'a' };

    // Act
    context().run({ ...initialContext }, getCurrentRequestContext);

    // Assert
    expect({
      getStoreSpyReturnValue: getCurrentRequestContext.returnValues[0],
    }).toEqual({
      getStoreSpyReturnValue: initialContext,
    });
  });

  test('When instantiating a new context and putting a key, then get back the key value', () => {
    // Arrange
    const getCurrentRequestContext = sinon.spy(() => context().getStore());

    // Act
    context().run({}, () => {
      context().getStore().requestId = 'a';

      getCurrentRequestContext();
    });

    // Assert
    expect({
      getStoreSpyReturnValue: getCurrentRequestContext.returnValues[0],
    }).toEqual({
      getStoreSpyReturnValue: {
        requestId: 'a',
      },
    });
  });
});
