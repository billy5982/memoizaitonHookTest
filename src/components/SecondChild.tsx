import React from 'react';

function SecondChild({ onClick }: { onClick: () => void }) {
  console.log('2nd rendered');
  return (
    <div onClick={onClick}>
      {Array.from({ length: 1000 }).map((_, idx) => (
        <div key={idx + 1}>{idx}</div>
      ))}
    </div>
  );
}

export default SecondChild;
// export default React.memo(SecondChild);
