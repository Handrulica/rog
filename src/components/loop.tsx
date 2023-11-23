import React from 'react';
import { cn } from 'src/lib/utils';

interface LoopProps extends React.HTMLAttributes<HTMLDivElement> {
  speed: number;
  direction: 'left' | 'right';
}

const Loop: React.FC<LoopProps> = ({ speed, direction, children, className }: LoopProps) => {

  const [contentInstances, setContentInstances] = React.useState(2);
  const outerRef = React.useRef<HTMLDivElement>(null);
  const innerRef = React.useRef<HTMLDivElement>(null);

  const resetAnimation = () => {
    if(innerRef?.current) {
      innerRef.current.setAttribute('data-animate', 'false');

      setTimeout(() => {
        if(innerRef?.current) {
          innerRef.current.setAttribute('data-animate', 'true');
        }
      }, 50);
    }
  };

  const setupInstances = React.useCallback(() => {
    if(!innerRef?.current || !outerRef?.current) return;

    const { width } = innerRef.current.getBoundingClientRect();
    const { width: parentWidth } = outerRef.current.getBoundingClientRect();
    const instancesWidth = width / innerRef.current.children.length;

    if (width < parentWidth + instancesWidth) {
      setContentInstances(contentInstances + Math.ceil(parentWidth / width));
    }

    resetAnimation();
  }, [contentInstances]);


  React.useEffect(() => {
    setupInstances();

    window.addEventListener("resize", setupInstances);

    return () => {
      window.removeEventListener("resize", setupInstances);
    };
  }, []);

  return (
    <div className={cn('w-full overflow-hidden', className)}>
      <div className='loop_wrapper flex justify-center w-fit' ref={innerRef} data-animate={true}>
        {[...Array(contentInstances)].map((_, ind) => (
          <div
            key={ind}
            className='loop_instance flex w-max p-2 gap-4 md:gap-8 xl:gap-12 mx-4'
            style={{
              animationDuration: `${speed}s`,
              animationDirection: direction === "right" ? "reverse" : "normal",
            }}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loop;
