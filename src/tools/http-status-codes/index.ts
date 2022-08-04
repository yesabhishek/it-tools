import { HttpRound } from '@vicons/material';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'HTTP status codes',
  path: '/http-status-codes',
  description: 'The list of all http and WebDav status code with an explanation description.',
  keywords: ['http', 'status', 'codes', 'WebDav'],
  component: () => import('./http-status-codes.vue'),
  icon: HttpRound,
});
