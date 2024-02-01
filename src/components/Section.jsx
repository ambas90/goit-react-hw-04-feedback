import PropTypes from 'prop-types';

import { SectionUi } from './SectionStyles';

const Section = ({ title, children }) => {
  return (
    <SectionUi>
      <h1>{title}</h1>
      {children}
    </SectionUi>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};

export default Section;
