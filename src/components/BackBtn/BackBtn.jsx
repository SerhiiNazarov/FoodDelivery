import { Link, IconLeft } from './BackBtn.styled';

export const BackBtn = ({ link, onClick }) => {
  return (
    <Link to={link}>
      <span type="button">
        <IconLeft />
      </span>
      Back
    </Link>
  );
};
