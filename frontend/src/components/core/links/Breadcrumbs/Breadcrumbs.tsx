import classNames from "classnames";
import { arrayOf, string } from "prop-types";
import { Link } from "react-router-dom";
import { BreadcrumbsProps } from "./Breadcrumbs-types";
import "./Breadcrumbs.scss";

export const Breadcrumbs = ({
  categories,
  addClass,
}: BreadcrumbsProps): React.ReactElement => {
  const classes = classNames("breadcrumbs", addClass);

  return (
    <div className={classes}>
      {categories.length > 0
        ? categories.map((category: string, i: number) => (
            <div key={i}>
              {i > 0 && ">"}
              <Link to={`/items?search=${category}`}>{category}</Link>
            </div>
          ))
        : ""}
    </div>
  );
};

Breadcrumbs.defaultProps = {
  addClass: "",
};

Breadcrumbs.propTypes = {
  categories: arrayOf(string).isRequired,
  addClass: string,
};
