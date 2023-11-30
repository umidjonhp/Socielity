import React, { useState } from "react";
import { TECollapse } from "tw-elements-react";

export const Faq = () => {
  const [activeElement, setActiveElement] = useState("");

  const handleClick = (value) => {
    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  };
  return (
    <>
      <div id="accordionExample" className="grid grid-cols-2 gap-[30px] px-[65px]">
        <div className="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200 bg-inherit ease-in">
          <h2 className="mb-0" id="headingOne">
            <button
              className={`${activeElement === "element1" &&
                `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                } group relative flex w-full items-center rounded-none border-color3-2 bg-white px-5 py-4 text-left text-base text-color3-3 transition [overflow-anchor:none] font-bold hover:z-[2] focus:z-[3] focus:outline-none bg-[#fff] dark:text-white border-[1px]`}
              type="button"
              onClick={() => handleClick("element1")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              + General
              <span
                className={`${activeElement === "element1"
                  ? `rotate-[-180deg] -mr-1`
                  : `rotate-0 fill-[#212529] dark:fill-white`
                  } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <TECollapse
            show={activeElement === "element1"}
            className="!mt-0 !rounded-b-none !shadow-none"
          >
            <div className="px-5 py-4 ">
              Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu
              rhoncus purus, vitae tincidunt nibh. Vivamus elementum egestas
              ligula in varius. Proin ac erat pretium, ultricies leo at, cursus
              ante. Pellentesque at odio euismod, mattis urna ac, accumsan
              metus. Nam nisi leo, malesuada vitae pretium et, laoreet at lorem.
              Curabitur non sollicitudin neque.
            </div>
          </TECollapse>
        </div>
        <div className="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200 bg-inherit ease-in">
          <h2 className="mb-0" id="headingOne">
            <button
              className={`${activeElement === "element2" &&
                `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                } group relative flex w-full items-center rounded-none border-[1px] bg-white px-5 py-4 text-left text-base text-color3-3 transition [overflow-anchor:none] font-bold hover:z-[2] focus:z-[3] focus:outline-none bg-[#fff] border-color3-2 dark:text-white `}
              type="button"
              onClick={() => handleClick("element2")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              + All Showcase
              <span
                className={`${activeElement === "element2"
                  ? `rotate-[-180deg] -mr-1`
                  : `rotate-0 fill-[#212529] dark:fill-white`
                  } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <TECollapse
            show={activeElement === "element2"}
            className="!mt-0 !rounded-b-none !shadow-none"
          >
            <div className="px-5 py-4 ">
              Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu
              rhoncus purus, vitae tincidunt nibh. Vivamus elementum egestas
              ligula in varius. Proin ac erat pretium, ultricies leo at, cursus
              ante. Pellentesque at odio euismod, mattis urna ac, accumsan
              metus. Nam nisi leo, malesuada vitae pretium et, laoreet at lorem.
              Curabitur non sollicitudin neque.
            </div>
          </TECollapse>
        </div>
        <div className="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200 bg-inherit ease-in">
          <h2 className="mb-0" id="headingOne">
            <button
              className={`${activeElement === "element3" &&
                `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                } group relative flex w-full items-center rounded-none border-[1px] bg-white px-5 py-4 text-left text-base text-color3-3 transition [overflow-anchor:none] font-bold hover:z-[2] focus:z-[3] focus:outline-none bg-[#fff] border-color3-2 dark:text-white `}
              type="button"
              onClick={() => handleClick("element3")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              + Registration
              <span
                className={`${activeElement === "element3"
                  ? `rotate-[-180deg] -mr-1`
                  : `rotate-0 fill-[#212529] dark:fill-white`
                  } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <TECollapse
            show={activeElement === "element3"}
            className="!mt-0 !rounded-b-none !shadow-none"
          >
            <div className="px-5 py-4 ">
              Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu
              rhoncus purus, vitae tincidunt nibh. Vivamus elementum egestas
              ligula in varius. Proin ac erat pretium, ultricies leo at, cursus
              ante. Pellentesque at odio euismod, mattis urna ac, accumsan
              metus. Nam nisi leo, malesuada vitae pretium et, laoreet at lorem.
              Curabitur non sollicitudin neque.
            </div>
          </TECollapse>
        </div>
        <div className="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200 bg-inherit ease-in">
          <h2 className="mb-0" id="headingOne">
            <button
              className={`${activeElement === "element4" &&
                `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                } group relative flex w-full items-center rounded-none border-[1px] bg-white px-5 py-4 text-left text-base text-color3-3 transition [overflow-anchor:none] font-bold hover:z-[2] focus:z-[3] focus:outline-none bg-[#fff] border-color3-2 dark:text-white `}
              type="button"
              onClick={() => handleClick("element4")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              + My Account
              <span
                className={`${activeElement === "element4"
                  ? `rotate-[-180deg] -mr-1`
                  : `rotate-0 fill-[#212529] dark:fill-white`
                  } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <TECollapse
            show={activeElement === "element4"}
            className="!mt-0 !rounded-b-none !shadow-none"
          >
            <div className="px-5 py-4 ">
              Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu
              rhoncus purus, vitae tincidunt nibh. Vivamus elementum egestas
              ligula in varius. Proin ac erat pretium, ultricies leo at, cursus
              ante. Pellentesque at odio euismod, mattis urna ac, accumsan
              metus. Nam nisi leo, malesuada vitae pretium et, laoreet at lorem.
              Curabitur non sollicitudin neque.
            </div>
          </TECollapse>
        </div>
        <div className="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200 bg-inherit ease-in">
          <h2 className="mb-0" id="headingOne">
            <button
              className={`${activeElement === "element5" &&
                `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                } group relative flex w-full items-center rounded-none border-[1px] bg-white px-5 py-4 text-left text-base text-color3-3 transition [overflow-anchor:none] font-bold hover:z-[2] focus:z-[3] focus:outline-none bg-[#fff] border-color3-2 dark:text-white `}
              type="button"
              onClick={() => handleClick("element5")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              + Trade Partners
              <span
                className={`${activeElement === "element5"
                  ? `rotate-[-180deg] -mr-1`
                  : `rotate-0 fill-[#212529] dark:fill-white`
                  } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <TECollapse
            show={activeElement === "element5"}
            className="!mt-0 !rounded-b-none !shadow-none"
          >
            <div className="px-5 py-4 ">
              Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu
              rhoncus purus, vitae tincidunt nibh. Vivamus elementum egestas
              ligula in varius. Proin ac erat pretium, ultricies leo at, cursus
              ante. Pellentesque at odio euismod, mattis urna ac, accumsan
              metus. Nam nisi leo, malesuada vitae pretium et, laoreet at lorem.
              Curabitur non sollicitudin neque.
            </div>
          </TECollapse>
        </div>
        <div className="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200 bg-inherit ease-in">
          <h2 className="mb-0" id="headingOne">
            <button
              className={`${activeElement === "element6" &&
                `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                } group relative flex w-full items-center rounded-none border-[1px] bg-white px-5 py-4 text-left text-base text-color3-3 transition [overflow-anchor:none] font-bold hover:z-[2] focus:z-[3] focus:outline-none bg-[#fff] border-color3-2 dark:text-white `}
              type="button"
              onClick={() => handleClick("element6")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              + Help
              <span
                className={`${activeElement === "element6"
                  ? `rotate-[-180deg] -mr-1`
                  : `rotate-0 fill-[#212529] dark:fill-white`
                  } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <TECollapse
            show={activeElement === "element6"}
            className="!mt-0 !rounded-b-none !shadow-none"
          >
            <div className="px-5 py-4 ">
              Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu
              rhoncus purus, vitae tincidunt nibh. Vivamus elementum egestas
              ligula in varius. Proin ac erat pretium, ultricies leo at, cursus
              ante. Pellentesque at odio euismod, mattis urna ac, accumsan
              metus. Nam nisi leo, malesuada vitae pretium et, laoreet at lorem.
              Curabitur non sollicitudin neque.
            </div>
          </TECollapse>
        </div>
        <div className="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200 bg-inherit ease-in">
          <h2 className="mb-0" id="headingOne">
            <button
              className={`${activeElement === "element7" &&
                `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                } group relative flex w-full items-center rounded-none border-[1px] bg-white px-5 py-4 text-left text-base text-color3-3 transition [overflow-anchor:none] font-bold hover:z-[2] focus:z-[3] focus:outline-none bg-[#fff] border-color3-2 dark:text-white `}
              type="button"
              onClick={() => handleClick("element7")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              + My Showcase
              <span
                className={`${activeElement === "element7"
                  ? `rotate-[-180deg] -mr-1`
                  : `rotate-0 fill-[#212529] dark:fill-white`
                  } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <TECollapse
            show={activeElement === "element7"}
            className="!mt-0 !rounded-b-none !shadow-none"
          >
            <div className="px-5 py-4 ">
              Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu
              rhoncus purus, vitae tincidunt nibh. Vivamus elementum egestas
              ligula in varius. Proin ac erat pretium, ultricies leo at, cursus
              ante. Pellentesque at odio euismod, mattis urna ac, accumsan
              metus. Nam nisi leo, malesuada vitae pretium et, laoreet at lorem.
              Curabitur non sollicitudin neque.
            </div>
          </TECollapse>
        </div>
        <div className="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200 bg-inherit ease-in">
          <h2 className="mb-0" id="headingOne">
            <button
              className={`${activeElement === "element8" &&
                `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                } group relative flex w-full items-center rounded-none border-[1px] bg-white px-5 py-4 text-left text-base text-color3-3 transition [overflow-anchor:none] font-bold hover:z-[2] focus:z-[3] focus:outline-none bg-[#fff] border-color3-2 dark:text-white `}
              type="button"
              onClick={() => handleClick("element8")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              + Support
              <span
                className={`${activeElement === "element8"
                  ? `rotate-[-180deg] -mr-1`
                  : `rotate-0 fill-[#212529] dark:fill-white`
                  } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <TECollapse
            show={activeElement === "element8"}
            className="!mt-0 !rounded-b-none !shadow-none"
          >
            <div className="px-5 py-4 ">
              Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu
              rhoncus purus, vitae tincidunt nibh. Vivamus elementum egestas
              ligula in varius. Proin ac erat pretium, ultricies leo at, cursus
              ante. Pellentesque at odio euismod, mattis urna ac, accumsan
              metus. Nam nisi leo, malesuada vitae pretium et, laoreet at lorem.
              Curabitur non sollicitudin neque.
            </div>
          </TECollapse>
        </div>
      </div>
    </>
  );
}