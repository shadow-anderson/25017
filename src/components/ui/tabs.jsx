import React from 'react';

const Tabs = ({ defaultValue, className = "", children, ...props }) => {
  const [value, setValue] = React.useState(defaultValue);

  return (
    <div className={`w-full ${className}`} {...props}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { value, setValue });
        }
        return child;
      })}
    </div>
  );
};

const TabsList = ({ className = "", children, value, setValue, ...props }) => {
  return (
    <div
      className={`inline-flex h-10 items-center justify-center rounded-md bg-slate-100 p-1 text-slate-500 ${className}`}
      {...props}
    >
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { value, setValue });
        }
        return child;
      })}
    </div>
  );
};

const TabsTrigger = ({ className = "", children, value: tabValue, onClick, value, setValue, ...props }) => {
  const isActive = value === tabValue;
  
  const handleClick = () => {
    setValue(tabValue);
    onClick && onClick();
  };

  return (
    <button
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
        isActive
          ? "bg-white text-slate-950 shadow-sm"
          : "text-slate-500 hover:text-slate-900"
      } ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};

const TabsContent = ({ className = "", children, value: tabValue, value, ...props }) => {
  if (value !== tabValue) return null;

  return (
    <div
      className={`mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export { Tabs, TabsList, TabsTrigger, TabsContent };