import { useEffect, useState } from "react";

const Counter = ({ target, suffix = "", duration = 1500 }:{target: number, suffix?: string, duration?: number}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const increment = end / (duration / 16);

    const counter = () => {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        requestAnimationFrame(counter);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(counter);
  }, [target, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const Stats = () => {
  const data = [
    { value: 47, label: "CLIENTS", suffix: "K+" },
    { value: 250, label: "PIECES", suffix: "+" },
    { value: 98, label: "SATISFACTION", suffix: "%" },
  ];

  return (
    <section className="w-full border-t border-gray-200 py-12 mt-16 max-w-xl">
      <div className=" max-w-5xl flex items-center gap-10 text-center justify-start">
        {data.map((item, index) => (
          <div key={index}>
            <h2 className="text-2xl  text-gray-800">
              <Counter target={item.value} suffix={item.suffix} />
            </h2>
            <p className="mt-2 text-xs tracking-[0.2em] text-gray-400">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
