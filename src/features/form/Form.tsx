import Button from '@/components/Button';
import Input from '@/components/Input';
import Select from '@/components/Select';
import { useForm, FormProvider } from 'react-hook-form';

type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>;

type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>;

export interface FormData {
  name: string;
  preparation_time: string;
  type: 'pizza' | 'soup' | 'sandwich';
  no_of_slices?: number;
  diameter?: number;
  spiciness_scale?: IntRange<1, 11>;
  slices_of_bread?: number;
}

const OPTIONS = ['pizza', 'soup', 'sandwich'];

const Form = () => {
  const methods = useForm<FormData>();

  const submit = (d: FormData) => {
    console.log(d);
  };

  const selectedType = methods.watch('type');

  return (
    <FormProvider {...methods}>
      <form
        className="flex flex-col gap-2 justify-center items-center"
        onSubmit={methods.handleSubmit(submit)}
      >
        <div className="flex gap-2">
          <Input name="name" label="Dish name" placeholder="Dish name..." type="text" />
          <Input name="preparation_time" label="Preparation time" type="time" step={1} />
          <Select name="type" label="Type" options={OPTIONS} placeholder="Select type..." />
        </div>
        <Button type="submit">Add</Button>
      </form>
    </FormProvider>
  );
};
export default Form;
