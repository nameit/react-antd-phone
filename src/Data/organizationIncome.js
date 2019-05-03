import Mock from 'mockjs';

const table = Mock.mock({
  thead: ['序号', '税种', '税额', '同比'],
  'tbody|2': [{
    'no|+1': 1,
    kind: '增值税',
    amount: '0.893',
    yearOnYear: '8.89'
  }]
});

export default { table };
