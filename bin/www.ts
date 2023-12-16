import createApp from '../app';

const app = createApp();
const PORT: number = 3000;

app.listen(PORT, () => {
  console.log('서버 가동');
});
