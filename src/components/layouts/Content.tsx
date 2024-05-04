import { ReactElement } from "react";

interface ContentProps {
  title: string;
  children?: ReactElement | ReactElement[];
}

const Content = (props: ContentProps) => {
  return (
    <main className="tw-flex-1">
      <div className="tw-py-6">
        <div className="tw-max-w-full tw-mx-auto tw-px-4 sm:tw-px-6 md:tw-px-8">
          <h1 className="tw-text-2xl tw-font-semibold tw-text-gray-900">
            {props.title}
          </h1>
        </div>
        <div className="tw-max-w-full tw-mx-auto tw-px-4 sm:tw-px-6 md:tw-px-8">
          {/* your content */}
          {props.children}
          {/* /End content */}
        </div>
      </div>
    </main>
  );
};

export default Content;
