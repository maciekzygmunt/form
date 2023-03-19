import Input from '@/components/Input';
import { useForm, useFieldArray, FormProvider } from 'react-hook-form';

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

const Form = () => {
  const methods = useForm<FormData>();

  const submit = (d: FormData) => {
    console.log(d);
  };

  return (
    <FormProvider {...methods}>
      <form className="flex justify-center items-center" onSubmit={methods.handleSubmit(submit)}>
        <Input name="name" placeholder="Name..." type="text" />
      </form>
    </FormProvider>
  );
};
export default Form;
