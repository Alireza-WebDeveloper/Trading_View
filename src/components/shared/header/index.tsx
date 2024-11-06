import LinkContainer from '../link-container';

const Header = () => {
  return (
    <header className="flex bg-gray-900 items-center p-4 justify-between ">
      <div className="flex gap-4">
        <LinkContainer to="/" text="home" />
      </div>
    </header>
  );
};

export default Header;
