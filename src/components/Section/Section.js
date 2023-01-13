import PropTypes from 'prop-types';

import { Title } from './Section.styled';

import { MainSection } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <MainSection>
      <Title>{title}</Title>
      {children}
    </MainSection>
  );
};

PropTypes.Section = {
  title: PropTypes.string.isRequired,
};
