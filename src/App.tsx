import Heading from '@/components/UI/Heading';
import Form from '@/features/form/Form';

function App() {
  return (
    <div className="flex flex-col h-screen justify-between items-center p-8">
      <Heading />
      <Form />
      <div>Maciej Zygmunt</div>
    </div>
  );
}

export default App;
