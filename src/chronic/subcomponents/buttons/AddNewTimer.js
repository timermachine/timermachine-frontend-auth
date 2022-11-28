import React from 'react';
import ButtonAnimation from './ButtonAnimation';
import Quote from '../../../Quote';
import Clock from '../Clock';
import CardAnimation from './CardAnimation';

const AddNewTimer = ({ addNewTimer }) => {
  return (
    <>
      <CardAnimation>
        <div className="relative z-0 ml-0 flex flex-col rounded-3xl w-[200px] h-[200px]  baseCard baseWhite furniture-border px-2">
          <Clock />
          <Quote />
          {/* <div className='h-[202px]'></div> */}
          <div
            className="grid place-items-center justify-center mb-4"
            title="Add new timer">
            <ButtonAnimation clickHandler={addNewTimer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </ButtonAnimation>
          </div>
        </div>
      </CardAnimation>
    </>
  );
};

export default AddNewTimer;