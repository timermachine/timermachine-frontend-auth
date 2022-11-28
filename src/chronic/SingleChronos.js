import React, { useState, useEffect, useRef } from 'react';
import useStorage from '../Use/UseTimerStorage'; //'../Use/useMemortStorage';

import { ingestTimer } from './helpers';
import Chrono from './Chrono';
/*
TODO: MISNOMER: CHANGE name from SingleChronos to singleGroup/ShareGroup/inMemGroup - name will become apparent, and cool when it is born!
as now a group with memoryStorage.
*/
function SingleChronos({ timer }) {
  const { timers, duplicateTimer, craddTimer, addNewTimer, removeTimer } =
    useStorage({ useMem: true });

  useEffect(() => {
    const ingestedTimer = ingestTimer(timer);
    craddTimer(ingestedTimer);
    return () => {};
  }, []);

  return (
    <div className="flex flex-row flex-wrap list-timers single-timer">
      {timers.map((timer) => (
        <div key={timer.id} className=" flex flex-col m-2 ">
          <Chrono
            className=""
            key={timer.id} /* single Timer/new: no id (not stored yet) */
            singleTimerFlag={true} /* todo : concept on way out styling?*/
            timer={timer}
            removeTimer={removeTimer}
            craddTimer={craddTimer}
            duplicateTimer={duplicateTimer}
            timers={timers}
            addNewTimer={addNewTimer}
          />
        </div>
      ))}
    </div>
  );
}

export default SingleChronos;