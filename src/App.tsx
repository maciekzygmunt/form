import Heading from '@/components/UI/Heading';
import Form from '@/features/form/Form';
import Footer from './components/UI/Footer';

function App() {
  return (
    <div className="flex flex-col h-screen justify-between items-center p-8">
      <Heading />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
