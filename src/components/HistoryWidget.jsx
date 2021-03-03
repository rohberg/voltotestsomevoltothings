import React from 'react';

import { ObjectListInlineWidget } from '@eeacms/volto-object-widget';

const LineSchema = {
  title: 'History-Entry',
  properties: {
    historydate: {
      title: 'Date',
      widget: 'date',
    },
    historytopic: {
      title: 'What',
    },
    historyversion: {
      title: 'Version',
    },
    historyauthor: {
      title: 'Who',
    },
  },
  fieldsets: [
    {
      id: 'default',
      title: 'History-Entry',
      fields: [
        'historydate',
        'historytopic',
        'historyversion',
        'historyauthor',
      ],
    },
  ],
};

const HistoryWidget = (props) => {
  return (
    <ObjectListInlineWidget
      schema={LineSchema}
      {...props}
      value={props.value?.items || props.default?.items || []}
      onChange={(id, value) => props.onChange(id, { items: value })}
    />
  );
};

export default HistoryWidget;
