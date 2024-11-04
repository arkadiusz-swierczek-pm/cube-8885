import { capitalize } from './shared_utils/utils';

cube('TEST', {
  sql: `
    SELECT 'a' AS id
  `,
  dimensions: {
    id: {
      sql: 'id',
      title: capitalize('a'),
      type: 'string',
      primaryKey: true,
    },
  },
});
