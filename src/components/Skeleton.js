import cn from 'classnames';

function Skeleton({ times, className }) {
  const style = {
    outer: cn('relative overflow-hidden bg-gray-300 rounded mb-2.5', className),
    inner: `animate-shimmer absolute inset-0 -translate-x-full 
      bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300`,
  };

  const boxes = Array(times)
    .fill(0)
    .map((_, i) => {
      return (
        <div key={i} className={style.outer}>
          <div className={style.inner} />
        </div>
      );
    });

  return boxes;
}

export default Skeleton;
