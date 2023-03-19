import Button from '@/components/Button';
import Input from '@/components/Input';
import Select from '@/components/Select';
import { TYPES } from '@/types';
import { useForm, FormProvider } from 'react-hook-form';
import useAddDish, { FormData } from '@/hooks/mutations/useAddDish';

const OPTIONS = ['pizza', 'soup', 'sandwich'];

const Form = () => {
  const methods = useForm<FormData>();
  const addDishMutation = useAddDish();

  const submit = (d: FormData) => {
    const data = {
      name: d.name,
      preparation_time: d.preparation_time,
      type: d.type,
      ...(d.type === TYPES.PIZZA && {
        no_of_slices: +d.no_of_slices!,
        diameter: +d.diameter!,
      }),
      ...(d.type === TYPES.SOUP && {
        spiciness_scale: +d.spiciness_scale!,
      }),
      ...(d.type === TYPES.SANDWICH && {
        slices_of_bread: +d.slices_of_bread!,
      }),
    };
    addDishMutation.mutate(data);
  };

  const selectedType = methods.watch('type');

  return (
    <FormProvider {...methods}>
      <form
        className="flex flex-col gap-2 justify-center items-center"
        onSubmit={methods.handleSubmit(submit)}
      >
        <div className="flex gap-2">
          <Input name="name" label="Dish name" placeholder="Dish name..." type="text" isRequired />
          <Input name="preparation_time" label="Preparation time" type="time" step={1} isRequired />
          <Select name="type" label="Type" options={OPTIONS} placeholder="Select type..." />
          {selectedType === TYPES.PIZZA && (
            <>
              <Input
                name="no_of_slices"
                label="No of slices"
                placeholder="Number of slices..."
                type="number"
                min={0}
                step={1}
                isRequired
              />
              <Input
                name="diameter"
                label="Diameter"
                placeholder="Diameter..."
                type="number"
                step={0.01}
                isRequired
              />
            </>
          )}
          {selectedType === TYPES.SOUP && (
            <>
              <Input
                name="spiciness_scale"
                label="Spiciness scale (1-10)"
                placeholder="Spiciness scale..."
                type="number"
                additionalOptions={{
                  min: {
                    value: 1,
                    message: 'Minimum value is 1',
                  },
                  max: {
                    value: 10,
                    message: 'Maximum value is 10',
                  },
                }}
                step={1}
                isRequired
              />
            </>
          )}
          {selectedType === TYPES.SANDWICH && (
            <>
              <Input
                name="slices_of_bread"
                label="Slices of bread"
                placeholder="Slices of bread..."
                type="number"
                additionalOptions={{
                  min: {
                    value: 0,
                    message: 'Minimum value is 0',
                  },
                }}
                step={1}
                isRequired
              />
            </>
          )}
        </div>
        <Button type="submit">Add</Button>
      </form>
    </FormProvider>
  );
};
export default Form;
