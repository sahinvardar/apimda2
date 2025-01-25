import { a } from '@apimda/apimda2/core';
import { createAwsLambdaHandler } from '@apimda/apimda2/server';
import { helloController } from './definition.js';

export const helloImpl = a.implement(helloController, {
  hello: async ({ message }) => `Hello ${message ?? 'world'}`
});

export const handler = createAwsLambdaHandler(helloImpl);
