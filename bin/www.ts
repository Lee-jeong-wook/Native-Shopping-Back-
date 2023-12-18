import createApp from '../app';

const app = createApp();
const PORT: number = 5000;

app.listen(PORT, () => {
  console.log(`server is on PORT : ${PORT}`);
});
