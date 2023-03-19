import { useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { useController } from 'react-hook-form';

interface SelectProps {
  name: string;
  placeholder: string;
  label?: string;
  options: string[];
}

const Select = (props: SelectProps) => {
  const { field, fieldState } = useController({
    name: props.name,
    rules: {
      required: 'Required',
    },
  });

  const [selected, setSelected] = useState<string>(field.value || '');

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function isSelected(value: string) {
    return selected === value ? true : false;
  }

  function handleSelection(value: string) {
    setSelected(value);
    field.onChange(value);
  }

  return (
    <div className="flex h-10 w-56 items-center justify-center">
      <div className="mx-auto w-full max-w-xs">
        <Listbox as="div" className="space-y-1" value={selected} onChange={handleSelection}>
          {({ open }) => (
            <>
              <div className="relative">
                <span className="flex flex-col mt-9">
                  <label className="text-sm">{props.label || <>&nbsp;</>}</label>
                  <Listbox.Button
                    className={clsx(
                      'relative h-10 w-full cursor-default overflow-x-hidden whitespace-nowrap rounded-lg border border-primary bg-white pl-2 pr-10 text-left text-slate-400 outline-none transition duration-150 ease-in-out focus:ring-1 focus:border-tertiary'
                    )}
                  >
                    {!selected.length && props.placeholder}
                    {!!selected && (
                      <span className="block text-black">{capitalizeFirstLetter(selected)}</span>
                    )}
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </Listbox.Button>
                  <span className="text-xs text-red-500">
                    {fieldState.error?.message || <>&nbsp;</>}
                  </span>
                </span>
                <Transition
                  show={open}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                  className="absolute z-40 mt-1 w-full  rounded-md bg-white shadow-lg"
                >
                  <Listbox.Options
                    static
                    className="shadow-xs max-h-60 overflow-auto rounded-md py-1 text-base leading-6 focus:outline-none sm:text-sm sm:leading-5"
                  >
                    {props.options.map((value) => {
                      const isOptionSelected = isSelected(value);
                      return (
                        <Listbox.Option
                          key={value}
                          value={value}
                          disabled={selected.includes('Brak')}
                        >
                          {({ active }) => (
                            <div
                              className={`${
                                active ? 'bg-primary text-white' : 'text-gray-900'
                              } relative cursor-default select-none py-2 pl-8 pr-4`}
                            >
                              <span
                                className={`${
                                  isOptionSelected ? 'font-semibold' : 'font-normal'
                                } block truncate`}
                              >
                                {capitalizeFirstLetter(value)}
                              </span>
                              {isOptionSelected && (
                                <span
                                  className={`${
                                    active ? 'text-white' : 'text-primary'
                                  } absolute inset-y-0 left-0 flex items-center pl-1.5`}
                                >
                                  <svg
                                    className="h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </span>
                              )}
                            </div>
                          )}
                        </Listbox.Option>
                      );
                    })}
                  </Listbox.Options>
                </Transition>
              </div>
            </>
          )}
        </Listbox>
      </div>
    </div>
  );
};

export default Select;
