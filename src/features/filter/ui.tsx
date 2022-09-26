import { useRef } from "react";
import { regions } from "shared/lib";

export const Filter = ({
  region,
  setRegion,
}: {
  region: { name: string; id: number; value: string };
  setRegion(e: { name: string; id: number; value: string }): void;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const state = () => {
    if (ref.current !== null) {
      ref.current.classList.toggle("regions__options_active");
    }
  };

  const close = (e: any) => {
    if (e.target === ref.current?.parentElement || e.target === ref.current)
      return;
    ref.current?.classList.remove("regions__options_active");
  };

  document.addEventListener("click", close);

  return (
    <div className="regions">
      <div className="container">
        <div onClick={() => state()} className="regions__current">
          {region.name ?? "Все регионы"}
          <div ref={ref} className="regions__options">
            {regions.map((region) => (
              <p
                onClick={() => {
                  state();
                  setRegion(region);
                }}
                key={region.id}
                className="regions__item"
              >
                {region.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
