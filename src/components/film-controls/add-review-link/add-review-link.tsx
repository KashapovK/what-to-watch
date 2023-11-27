import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../../const/const';
import { useAppSelector } from '../../../hooks';

type AddReviewLinkProps = {
    id: string;
  }

export default function AddReviewLink({ id }: AddReviewLinkProps) {
  const { authorizationStatus } = useAppSelector((state) => state.user);

  return authorizationStatus === AuthorizationStatus.Authorized ? (
    <Link
      to={AppRoute.AddReview.replace(':id', id)}
      className="btn film-card__button"
    >
        Add review
    </Link>
  ) : null;
}
