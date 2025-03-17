import { FC } from "react";

export const Tabs = ({
  value,
  onChange,
  tabs,
  tabHeaderClassName,
  tabClassName,
  fullWidth,
}) => {
  return (
    <div
      role="tab"
      className={`rounded-xl bg-white p-4 max-w-[95%] flex flex-col gap-8 max-sm:w-[85%] w-[95%] min-h-[40vh] ${
        fullWidth ? "w-full max-w-full max-sm:w-[100%]" : ""
      }`}
    >
      <div
        className={`flex items-center justify-end gap-2 ${tabHeaderClassName}`}
        role="tablist"
      >
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            title={tab.title}
            onClick={onChange}
            active={index === value}
            index={index}
            tabClassName={tabClassName}
          />
        ))}
      </div>
      <div role="tabpanel" className="flex flex-col max-h-[95%] h-[95%]">
        {tabs.map((tab, index) => {
          const TabComponent = tab.component;
          const componentProps = tab.props;

          return (
            <div
              key={index}
              style={{ display: value === index ? "block" : "none" }}
              className=" w-full h-full"
            >
              <TabComponent
                {...{
                  ...componentProps,
                  id: `${componentProps.id}-${index}`,
                  ariaLabelledBy: `${componentProps.ariaLabelledBy}-${index}`,
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Tab = ({ title, onClick, active, index, tabClassName }) => {
  return (
    <div
      aria-selected={active}
      aria-controls={`tabpanel-${index}`}
      id={`tab-${index}`}
      className={`cursor-pointer ${tabClassName}`}
    >
      <button
        className={`w-full p-2 rounded-md ${
          active ? "bg-[#e3752c] text-white" : ""
        }`}
        onClick={() => onClick(index)}
      >
        {title}
      </button>
    </div>
  );
};
