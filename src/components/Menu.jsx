import { pageStates, usePageStore } from '../store';

export const Menu = () => {
  const { navigateTo, currentPage } = usePageStore((state) => ({
    navigateTo: state.navigateTo,
    currentPage: state.currentPage,
  }));

  return (
    <>
      <div
        className={`menu ${
          currentPage !== pageStates.MENU ? 'menu--hidden' : ''
        }`}
      >
        <div>
          <h1>Aryan Choudhary</h1>
          <p>
            Computer Science and Applied Mathematics Student at UNC Chapel Hill
          </p>
        </div>
        <button
          disabled={currentPage !== pageStates.MENU}
          onClick={() => navigateTo('portfolio')}
        >
          Welcome!
        </button>

        <div>
          <p>
            Connect with me on{' '}
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
