import { TYPES } from '@/types';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { z } from 'zod';
import toast from 'react-hot-toast';

const optNum = z.number().optional();

const payloadSchema = z.object({
  name: z.string(),
  preparation_time: z.string(),
  type: z.union([z.literal(TYPES.PIZZA), z.literal(TYPES.SOUP), z.literal(TYPES.SANDWICH)]),
  no_of_slices: optNum,
  diameter: optNum,
  spiciness_scale: z.number().min(1).max(10).optional(),
  slices_of_bread: optNum,
});

export type FormData = z.input<typeof payloadSchema>;

const useAddDish = () => {
  return useMutation(
    ['dish'],
    (payload: FormData) =>
      axios.post(import.meta.env.VITE_BASE_API, {
        ...payloadSchema.parse(payload),
      }),
    {
      onMutate() {
        toast.loading('Creating dish...');
      },
      onSuccess() {
        toast.dismiss();
        toast.success('Dish created successfully!');
      },
    }
  );
};

export default useAddDish;
