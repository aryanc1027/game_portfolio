import { pageStates, usePageStore } from '../store';

export const Menu = () => {
  const { navigateTo, currentPage } = usePageStore((state) => ({
    navigateTo: state.navigateTo,
    currentPage: state.currentPage,
  }));

  const { setWelcomeAccepted } = usePageStore((state) => ({
    setWelcomeAccepted: state.setWelcomeAccepted,
  }));

  return (
    <>
      <div
        className={`menu ${
          currentPage !== pageStates.MENU ? 'menu--hidden' : ''
        }`}
      >
        <div className="text-center p-4">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">Aryan Choudhary</h1>
          <p className="text-lg md:text-xl font-semibold">
            Computer Science and Applied Mathematics Student at UNC Chapel Hill
          </p>
        </div>

        <button
          className="px-6 py-2 text-lg md:text-xl my-4"
          disabled={currentPage !== pageStates.MENU}
          onClick={() => {
            navigateTo('portfolio');
            setWelcomeAccepted(true);
          }}
        >
          Welcome!
        </button>

        <div className="text-base md:text-lg p-2">
          <p>
            Add me on{' '}
            <a
              href="https://github.com/aryanc1027"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{' '}
            and{' '}
            <a
              href="https://www.linkedin.com/in/aryanc1027/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
      <div
        className={`content ${
          currentPage !== pageStates.CONTENT ? 'content--hidden' : ''
        }`}
      ></div>
    </>
  );
};
